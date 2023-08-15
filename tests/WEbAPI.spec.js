const { test, expect, request } = require('@playwright/test');

test.beforeAll("Web API", async ({ page }) => {
    const apiContext = await request.newContext();
    apiContext.post('http://aveda.com')

});