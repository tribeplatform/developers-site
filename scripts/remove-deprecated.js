const fs = require('fs');
const path = require('path');

const removeFromSidebar = (type, name) => {
    const sidebarContent = fs.readFileSync('./docs/graphql/sidebar-schema.js', 'utf-8')
    const newSidebarContent = sidebarContent.split('\n').filter(line => !line.includes(`"graphql/${type}/${name}",`)).join('\n')
    fs.writeFileSync('./docs/graphql/sidebar-schema.js', newSidebarContent)
}

const removeDeprecated = (type) => {
    const basePath = `./docs/graphql/${type}`
    const files = fs.readdirSync(basePath);
    for (const fileName of files) {
        const filePath = path.join(basePath, fileName);
        const content = fs.readFileSync(filePath, 'utf8');
        if (content.includes('DEPRECATED')) {
            removeFromSidebar(type, path.parse(filePath).name)
            fs.rmSync(filePath);
        }
    }
}

removeDeprecated('queries');
removeDeprecated('mutations');