const { test, expect } = require('@playwright/test');
const { GooglePage } = require('../pageobjects/GooglePage')
const { TestData } = require('../Locators/testdata.json')

test("Search for AE Website", async ({ page }) => {
    const googlePage = new GooglePage(page);

    //Navigate to Google page
    await googlePage.GOTO('https://www.google.com/', "Google");

    //Search for the given text 
    await googlePage.EnterText('AgileEngine');

    //click on AE Link 
    await googlePage.ClickAELink('https://agileengine.com/');

});

