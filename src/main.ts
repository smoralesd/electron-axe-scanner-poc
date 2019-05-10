import { app, BrowserWindow } from "electron";

let mainWindow: BrowserWindow;

const createWindow = () => {
    mainWindow = new BrowserWindow({show: false});

    mainWindow.loadURL("https://ada-cat.github.io/AU/before.html");

    mainWindow.on('ready-to-show', () => {
        mainWindow.show();
    });
};

app.on("ready", createWindow);