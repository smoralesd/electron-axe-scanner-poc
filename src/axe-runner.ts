import { source } from 'axe-core';
import * as Axe from 'axe-core';

declare const axe: typeof Axe;

export const inject = (webContents: Electron.WebContents) => {
    webContents.executeJavaScript(source);
};

export const run = (webContents: Electron.WebContents) => {
    const source = `(${String(scan)})()`;

    webContents.executeJavaScript(source);
};

const scan = () => {
    axe.run().then(results => {
        console.log(results.violations);
    });
}