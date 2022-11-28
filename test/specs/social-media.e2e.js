import PurchasePage from  '../pageobjects/purchase.page';

describe('My Login application', () => {
    beforeAll ('Navigate to url',() => {
        browser.url("https://www.saucedemo.com/");
    })
it('social media ', async () => {
    await PurchasePage.login('standard_user','secret_sauce');
    await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");

    await PurchasePage.twitter.click();
    browser.switchWindow('https://twitter.com/saucelabs')
    await expect(browser).toHaveUrl("https://twitter.com/saucelabs");
    browser.switchWindow('https://www.saucedemo.com/inventory.html')

    await PurchasePage.facebook.click();
    browser.switchWindow('https://www.facebook.com/saucelabs')
    await expect(browser).toHaveUrl("https://www.facebook.com/saucelabs");
    browser.switchWindow('https://www.saucedemo.com/inventory.html')

    await PurchasePage.linkedIn.click();
    browser.switchWindow('https://www.linkedin.com/company/sauce-labs/')
    await expect(browser).toHaveUrl("https://www.linkedin.com/company/sauce-labs/");
    browser.switchWindow('https://www.saucedemo.com/inventory.html')

    await PurchasePage.hamburMenu.click();
    await PurchasePage.logout.waitForClickable();
    await PurchasePage.logout.click();
})
});