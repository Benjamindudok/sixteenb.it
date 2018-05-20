'use strict';

const path = require('path');
const chalk = require('chalk');
const jetpack = require('fs-jetpack');
const uuidv1 = require('uuid/v4');

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
        chalk.white.bold(totalFileSize) +
        ` bytes`)
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
            chalk.blue.bold(`${imageDetails.size}`) + ` bytes`)
        );

        // save current file size to show total
        // file size of all images when done
        totalFileSize += imageDetails.size;

        // add unique ID
        fileContent.uuid = uuidv1();

        // add file url
        fileContent.preview = filePath.replace('.json', '.png').replace(jetpack.cwd(), '').split('\\').join('/');
        fileContent.image = filePath.replace('.json', '.png').replace(jetpack.cwd(), '').split('\\').join('/');

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