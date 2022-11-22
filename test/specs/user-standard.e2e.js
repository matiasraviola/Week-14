import LoginPage from  '../pageobjects/login.page';

describe('My Login application', () => {
    beforeAll ('Navigate to url',() => {
        browser.url("https://www.saucedemo.com/");
    })
    it('should not login with invalid credentials', async () => {
        await LoginPage.inputUsername.setValue("");
        await LoginPage.inputPassword.setValue("");
        await LoginPage.btnLogin.click();
        await LoginPage.errorMsg.waitForDisplayed({timeout: 10000});
        await expect(LoginPage.errorMsg).toHaveText("Epic sadface: Username is required");
        browser.refresh()

    });
    it('should not login without username', async () => {
        await LoginPage.login('','secret_sauce');
        await LoginPage.btnLogin.click();
        await expect(LoginPage.errorMsg).toBeDisplayed();
        await expect(LoginPage.errorMsg).toHaveText("Epic sadface: Username is required");
        browser.refresh()
    });
    it('should not login without password', async () => {
        await LoginPage.login('standar_user','');
        await LoginPage.btnLogin.click();
        await expect(LoginPage.errorMsg).toBeDisplayed();
        await expect(LoginPage.errorMsg).toHaveText("Epic sadface: Password is required");
        browser.refresh()
    });
    it('should not login with wrong password', async () => {
        await LoginPage.login('standar_user','test');
        await LoginPage.btnLogin.click();
        await expect(LoginPage.errorMsg).toBeDisplayed();
        await expect(LoginPage.errorMsg).toHaveText("Epic sadface: Username and password do not match any user in this service");
        browser.refresh()
    });
    it('should login with locked credentials', async () => {
        await LoginPage.login('locked_out_user','secret_sauce');
        await LoginPage.btnLogin.click();
        await expect(LoginPage.errorMsg).toHaveText("Epic sadface: Sorry, this user has been locked out.");

    });
    it('should login with valid credentials', async () => {
        await LoginPage.login('standard_user','secret_sauce');
        await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
        await browser.pause(3000);
        await LoginPage.hamburMenu.click();
        await LoginPage.logout.click();
    });
    it('should login with a problematic credentials', async () => {
        await LoginPage.login('problem_user','secret_sauce');
        await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
        await LoginPage.hamburMenu.click();
        await browser.pause(1000);
        await LoginPage.logout.click();
    });
    it('should login with valid credentials', async () => {
        await LoginPage.login('performance_glitch_user','secret_sauce');
        await browser.pause(7000);
        await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
        await browser.pause(3000);
        await LoginPage.hamburMenu.click();
        await LoginPage.logout.click();
    });
});


