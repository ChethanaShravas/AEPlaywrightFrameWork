const { test, except } = require('@playwright/test')

test("Working with Different Objects", async ({ page }) => {

    //******** Variable Declariation ******** //
    const url = "https://www.aveda.com/products/5311/hair-care/shampoo"
    const sizedDropDownLoc = page.locator("//button[contains(@phx-click,'#size-dropdown')]")

    //******** Variable Declariation ******** //
    await page.goto(url);


});