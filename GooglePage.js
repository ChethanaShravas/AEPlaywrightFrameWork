const { expect } = require('@playwright/test');
const dataset = JSON.parse(JSON.stringify(require("../pagelocators/googlePage.json")));

class GooglePage {

    constructor(page) {
        this.page = page;
        this.searchResultLoc = dataset.searchResultLoc
    }

    async GoTo() {
        //await this.page.goto(this.url);
        await this.page.goto(dataset.url);
    }

    async ValidateTitle(titleTxt) {
        console.log(await this.page.title(titleTxt));
        await expect(this.page).toHaveTitle(titleTxt);
    }

    async EnterText(text) {
        console.log("Inside SearchPage " + text)
        await this.page.locator(dataset.searchTxtBoxLoc).fill(text)
        await expect(this.page.locator(dataset.searchTxtBoxLoc)).toHaveValue(text);
        await this.page.keyboard.press('Enter');
        await this.page.waitForLoadState('networkidle') //Waiting for page to load
    }
    async LinkClick(AELink) {
        var searchResults = await this.page.$$(this.searchResultLoc);
        for await (const searchResult of searchResults) {
            var url = await searchResult.getAttribute('href');
            if (url == AELink) {
                await searchResult.click();
                console.log("Agile engine Link is clicked")
                break;
            }
        }
    }

    async ObjectExists() {
        await this.page.isVisible(dataset.searchResultLoc)
    }


}
module.exports = { GooglePage };