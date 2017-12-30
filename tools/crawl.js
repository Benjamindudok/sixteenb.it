'use strict';

const path = require('path');
const chalk = require('chalk');
const jetpack = require('fs-jetpack');
const uuidv1 = require('uuid/v4');

console.log(chalk.blue('crawling...'));

let content = {},
    totalFileSize = 0;

readDirectoryRecursively('../content', () => {
    jetpack.write(path.resolve(__dirname, '../static/content.json'), content, { jsonIndent: 4 });

    console.log(chalk.green(`Generated content.json in static directory.`));
    console.log(chalk.green(`Total content folder size: ` +
        chalk.white.bold(totalFileSize) +
        ` bytes`)
    );
});

function readDirectoryRecursively(directoryPath, callback)
{
    let directory = jetpack.cwd(path.resolve(__dirname, directoryPath)),
        directoryContents = directory.list();

    for (let i = 0; i < directoryContents.length; i++)
    {
        let item = directoryContents[i];

        let itemNameInChunks = item.split('.');
        if (itemNameInChunks.length === 1)
        {
            //Move into child folder
            readDirectoryRecursively(directory.cwd() + '\\' + item, null);
        }
        else
        {
            // read json files only
            if (itemNameInChunks[itemNameInChunks.length - 1] === 'json')
            {
                readFile(directory.cwd() + '\\' + item, getCurrentDirectoryName(directory.cwd()));
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
        // print image details
        console.log(chalk.blue(`name: ` +
            chalk.blue.bold(`${imageDetails.name}`) +
            ` - ` +
            chalk.blue.bold(`${imageDetails.size}`) +
            ` bytes`)
        );

        // save current file size
        totalFileSize += imageDetails.size;

        // add unique ID
        fileContent.uuid = uuidv1();

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
        console.log(chalk.red(`ERROR - No image found for ${fileContent.slug}, skipping this file.`));
    }
}

function getCurrentDirectoryName(directoryPath)
{
    let directoryPathInChunks = directoryPath.split('\\');
    return directoryPathInChunks[directoryPathInChunks.length - 1];
}