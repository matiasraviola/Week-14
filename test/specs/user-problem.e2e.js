import LoginPage from  '../pageobjects/login.page';

describe('My Login application', () => {
    beforeAll ('Navigate to url',() => {
        browser.url("https://www.saucedemo.com/");
    })

    it('should login with a problematic credentials', async () => {
        await LoginPage.login('problem_user','secret_sauce');
        await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
        await LoginPage.hamburMenu.click();
        await browser.pause(1000);
        await LoginPage.logout.click();
    });
})