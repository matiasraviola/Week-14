import purchasePage from '../pageobjects/purchase.page';
import PurchasePage from  '../pageobjects/purchase.page';

describe('My Login application', () => {
    beforeAll ('Navigate to url',() => {
        browser.url("https://www.saucedemo.com/");
    })
    it('should login with valid credentials', async () => {
        await PurchasePage.login('standard_user','secret_sauce');
        await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
        await browser.pause(3000);
        await PurchasePage.btnAddCart.click();
        await PurchasePage.btnCart.click();
        await PurchasePage.btnCheckout.click();
        await PurchasePage.purchase('matias','raviola','12345');
        await PurchasePage.hamburMenu.click();
        await PurchasePage.logout.click();
    });
});