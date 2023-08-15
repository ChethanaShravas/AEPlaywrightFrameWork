const { test, expect } = require('@playwright/test');

test("First Demo test", async ({ page }) => {

    //******** Variable Declariation ******** //
    const url = "https://www.google.com"
    const searchTxtBox = page.locator("[title='Search']")
    const searchResults = page.locator("//div[@class='MjjYud']//a")
    let googleTitle = 'Google'
    let searchResultLoc = "//div[@class='MjjYud']//a"

    //******** Variable Declariation ******** //


    await page.goto(url);
    console.log(await page.title(googleTitle));
    await expect(page).toHaveTitle(googleTitle);
    await searchTxtBox.fill("AgileEngine");
    await expect(searchTxtBox).toHaveValue('AgileEngine');
    await page.keyboard.press('Enter');
    // await page.waitForSelector(searchResultLoc, { timeout: 5000 })
    await page.waitForLoadState('networkidle') //Waiting for page to load
    const allResults = await searchResults.allTextContents();
    console.log(allResults.length)
    for (var i = 0; i <= allResults.length - 1; i++) {
        if (await searchResults.nth(i).textContent() == 'AgileEngine | HomeAgileEnginehttps://agileengine.com') {
            console.log('Chethana')
            break;
        }
    }
});
