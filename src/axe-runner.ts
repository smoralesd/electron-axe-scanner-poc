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
        console.log(`found ${results.violations.length} a11y issues: `, results.violations);

        results.violations.forEach(elem => {
            elem.nodes.forEach(node => {
                const htmlElement = document.querySelector(node.target[0]) as HTMLElement;
                htmlElement.style.borderStyle = "dashed";
                htmlElement.style.borderWidth = "5px";
                htmlElement.style.borderColor = "red";
            });

        });
    });
}
