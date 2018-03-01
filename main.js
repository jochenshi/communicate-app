const electron = require('electron');
const {app, BrowserWindow} = electron;
const url = require('url');
const path = require('path');

const packageFile = require('./package.json');

let mainWindow;

function createWindow () {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    });
    if (packageFile.mode === 'developmemnt') {
        mainWindow.loadURL('http://localhost:3000')
    } else {
        mainWindow.loadURL(url.format({
            pathname: path.join(__dirname, 'index.html'),
            protocol: 'file:',
            slashed: true
        }));
    }

    mainWindow.on('closed', () => {
        mainWindow = null;
    })
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow()
    }
});

