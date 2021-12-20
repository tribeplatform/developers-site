const fs = require('fs-extra');
const path = require('path');
const {files, categoryJsons} = require('./client-doc-data')

const basePath = './docs/guide/gql-client'

const createCategoryJson = (label, position, dir) => {
    fs.writeJsonSync(path.join(basePath, dir, '_category_.json'), {
        label,
        position,
    }, {
        spaces: 2,
    });
}

const fixFile = (filePath) => {
    const fileName = path.basename(filePath)
    const dirName = path.dirname(filePath)

    const fileData = files.find(f => f.name === fileName)
    if (!fileData) return

    if(fileData.rename) {
        const newPath = path.join(dirName, fileData.rename)
        fs.moveSync(filePath, newPath)
        filePath = newPath
    }

    let content = fs.readFileSync(filePath, 'utf8');

    if (fileData.prepend) {
        content = fileData.prepend + content
    }

    if(fileData.sideBarPosition) {
        content = `---\nsidebar_position: ${fileData.sideBarPosition}\n---\n\n${content}`
    }

    if(fileData.replace) {
        for (const item of fileData.replace) {
            content = content.replaceAll(item.find, item.replace)
        }
    }

    for (const fileData of files) {
        if (fileData.rename)
            content = content.replaceAll(fileData.name, fileData.rename)
    }


    fs.writeFileSync(filePath, content.replaceAll('.md', ''))
}

const recursiveFixFiles = (dirName) => {
    const files = fs.readdirSync(dirName);
    for (const fileName of files) {
        const filePath = path.join(dirName, fileName);
        if (fs.statSync(filePath).isDirectory()) {
            recursiveFixFiles(filePath)
        } else {
            fixFile(filePath)
        }
    }
}

// Remove old docs
fs.removeSync('./docs/guide/gql-client')

// Copy the new docs
fs.copySync(
    '../tribe-neo/packages/gql-client/docs',
    './docs/guide/gql-client',
    {recursive: true}
);

// Create _category_.json files
for (const categoryJson of categoryJsons) {
    const {label, position, dir} = categoryJson;
    createCategoryJson(label, position, dir);
}

// Apply fixes
recursiveFixFiles('./docs/guide/gql-client')
