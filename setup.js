const https = require('https');
const fs = require('fs');
const path = require('path');

const DOOM_FILES = [
    {
        url: 'https://archive.org/download/doom-shareware/doom1.wad',
        filename: 'doom1.wad'
    }
];

async function downloadFile(url, filename) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(path.join('doom', filename));
        https.get(url, (response) => {
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(filename);
            reject(err);
        });
    });
}

async function setup() {
    console.log('Downloading DOOM files...');
    for (const file of DOOM_FILES) {
        console.log(`Downloading ${file.filename}...`);
        await downloadFile(file.url, file.filename);
    }
    console.log('Setup complete! You can now run DOOM in your browser.');
}

setup().catch(console.error); 