import LoginPage from  '../pageobjects/login.page';

describe('My Login application', () => {
    beforeAll ('Navigate to url',() => {
        browser.url("https://www.saucedemo.com/");
    })

it('should login with locked credentials', async () => {
    await LoginPage.login('locked_out_user','secret_sauce');
    await LoginPage.btnLogin.click();
    await expect(LoginPage.errorMsg).toHaveText("Epic sadface: Sorry, this user has been locked out.");

});
})