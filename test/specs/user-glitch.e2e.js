import LoginPage from  '../pageobjects/login.page';

describe('My Login application', () => {
    beforeAll ('Navigate to url',() => {
        browser.url("https://www.saucedemo.com/");
    })

  it('should login with valid credentials', async () => {
    await LoginPage.login('performance_glitch_user','secret_sauce');
    await browser.pause(7000);
    await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
    await browser.pause(3000);
    await LoginPage.hamburMenu.click();
    await LoginPage.logout.click();
});
})