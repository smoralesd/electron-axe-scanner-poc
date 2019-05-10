import { app, BrowserWindow } from "electron";
import { inject, run } from './axe-runner';

let mainWindow: BrowserWindow;

const createWindow = () => {
    mainWindow = new BrowserWindow({show: false});

    mainWindow.loadURL("https://ada-cat.github.io/AU/before.html");

    mainWindow.on('ready-to-show', () => {
        mainWindow.maximize();
        mainWindow.show();

        mainWindow.webContents.openDevTools({mode: "detach"});

        inject(mainWindow.webContents);

        run(mainWindow.webContents);
    });
};

app.on("ready", createWindow);