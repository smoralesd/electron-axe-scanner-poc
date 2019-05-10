import { app, BrowserWindow } from "electron";

let mainWindow: BrowserWindow | null;

const createWindow = () => {
    mainWindow = new BrowserWindow();

    mainWindow.loadURL("https://ada-cat.github.io/AU/before.html");

    mainWindow.on("closed", () => {
        mainWindow = null;
    });
};

app.on("ready", createWindow);