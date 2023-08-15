//const playwright = require('@playwright/test');
const { chromium, firefox, webkit } = require('@playwright/test');
const { POManager } = require('../../pageobjects/POManager');
const { Before, After, BeforeStep, AfterStep, Status } = require('@cucumber/cucumber')


let selectedBrowser;
let context;
let page;

Before(async function () {
    // const browser = await playwright.chromium.launch({
    //     headless: false
    // });
    selectedBrowser = this.parameters.browser || 'chrome';
    let browser;
    switch (selectedBrowser.toLowerCase()) {
        case 'chrome':
            browser = await chromium.launch({ headless: false });
            break;
        case 'firefox':
            browser = await firefox.launch({ headless: false });
            break;
        case 'webkit':
            browser = await webkit.launch({ headless: false });
            break;
        default:
            throw new Error(`Unsupported browser: ${selectedBrowser}`);
    }

    context = await browser.newContext();
    page = await context.newPage();
    this.poManager = new POManager(page);
});

BeforeStep(function () {
    // This hook will be executed before all steps in a scenario with tag @foo
});

AfterStep(async function ({ result }) {

    if (result.status === Status.FAILED) {
        await this.page.screenshot({ path: 'screenshot1.png' });
    }
    //await Promise.all(browsers.map(browser => browser.close()));


});


After(function () {
    console.log("Completed Exeuction");
});
