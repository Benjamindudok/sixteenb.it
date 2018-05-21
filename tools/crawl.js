'use strict';

const path = require('path');
const chalk = require('chalk');
const jetpack = require('fs-jetpack');
const uuidv1 = require('uuid/v4');
const sizeOf = require('image-size');

let content = {},
    totalFileSize = 0;

let contentDirectory = '../static/content/',
    distDirectory = '../static/',
    targetFile = 'content.json';

console.log(chalk.blue('crawling...'));

readDirectoryRecursively(contentDirectory, () => {
    jetpack.write(path.resolve(__dirname, distDirectory + targetFile), content, { jsonIndent: 4 });

    console.log(chalk.green(`Generated ` + targetFile + ` in '` + distDirectory + `' directory.`));
    console.log(chalk.green(`Total content folder size: ` +
        chalk.white.bold(formatBytes(totalFileSize)))
    );
});

function readDirectoryRecursively(directoryPath, callback)
{
    let directory = jetpack.cwd(path.resolve(__dirname, directoryPath)),
        directoryContents = directory.list();

    if (jetpack.exists(directory.path()) === 'dir') {
        for (let i = 0; i < directoryContents.length; i++)
        {
            let item = directoryContents[i];

            let itemNameInChunks = item.split('.');
            if (itemNameInChunks.length === 1)
            {
                //Move into child folder
                readDirectoryRecursively(path.join(directory.cwd(), item), null);
            }
            else
            {
                // read json files only
                if (itemNameInChunks[itemNameInChunks.length - 1] === 'json')
                {
                    readFile(path.join(directory.cwd(), item), getCurrentDirectoryName(directory.cwd()));
                }
            }
        }
    }

    // directory is fully read
    if (callback)
    {
        callback();
    }
}

function readFile(filePath, directoryName)
{
    let file = jetpack.read(filePath),
        fileContent = JSON.parse(file);

    let imageDetails = jetpack.inspect(filePath.replace('.json', '.png'));
    if (imageDetails)
    {
        console.log(chalk.blue(`name: ` +
            chalk.blue.bold(`${imageDetails.name}`) + ` - ` +
            chalk.blue.bold(formatBytes(imageDetails.size)))
        );

        // save current file size to show total
        // file size of all images when done
        totalFileSize += imageDetails.size;

        // add unique ID
        fileContent.uuid = uuidv1();

        // add file url
        fileContent.preview = filePath.replace('.json', '.png').replace(jetpack.cwd(path.resolve(__dirname, distDirectory)).path(), '').split('\\').join('/');
        fileContent.image = filePath.replace('.json', '.png').replace(jetpack.cwd(path.resolve(__dirname, distDirectory)).path(), '').split('\\').join('/');

        // add file meta data
        fileContent.fileSize = formatBytes(imageDetails.size);

        let dimensions = sizeOf(filePath.replace('.json', '.png'));
        fileContent.width = dimensions.width;
        fileContent.height = dimensions.height;

        // create category if needed
        if (!content[directoryName])
        {
            content[directoryName] = [];
        }

        // add file to category
        content[directoryName].push(fileContent);
    }
    else
    {
        // do nothing if no image is found
        // because there is no content
        console.log(chalk.red(`ERROR - No image found for ${fileContent.slug}, skipping this file.`));
    }
}

function getCurrentDirectoryName(directoryPath)
{
    let directoryPathInChunks = directoryPath.split(path.sep);
    return directoryPathInChunks[directoryPathInChunks.length - 1];
}

// Format amount of bytes into appropiate human readable file size
// Borrowed from: https://stackoverflow.com/questions/15900485/correct-way-to-convert-size-in-bytes-to-kb-mb-gb-in-javascript
function formatBytes(a,b){if(0==a)return"0 Bytes";var c=1024,d=b||2,e=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],f=Math.floor(Math.log(a)/Math.log(c));return parseFloat((a/Math.pow(c,f)).toFixed(d))+" "+e[f]}