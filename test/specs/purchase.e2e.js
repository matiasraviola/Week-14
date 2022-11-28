import PurchasePage from  '../pageobjects/purchase.page';

describe('My Login application', () => {
    beforeAll ('Navigate to url',() => {
        browser.url("https://www.saucedemo.com/");
    })
    it('add some product to the cart and complete the sell', async () => {
        await PurchasePage.login('standard_user','secret_sauce');
        await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
        await PurchasePage.btnAddBackpack.waitForClickable();
        await PurchasePage.btnAddBackpack.click();
        const cartNumber = await $('#shopping_cart_container > a > span').getText();
        await expect(cartNumber).toBe('1')
        await PurchasePage.btnCart.waitForClickable();
        await PurchasePage.btnCart.click();
        await PurchasePage.btnCheckout.waitForClickable();
        await PurchasePage.btnCheckout.click();
        await PurchasePage.purchase('matias','raviola','12345');
        await PurchasePage.btnFinish.click();
        await PurchasePage.btnBackHome.waitForClickable();
        await PurchasePage.btnBackHome.click();
        await PurchasePage.hamburMenu.click();
        await PurchasePage.logout.waitForClickable();
        await PurchasePage.logout.click();
    });
    it('complete the sell without a product in the cart', async () => {
        await PurchasePage.login('standard_user','secret_sauce');
        await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
        await PurchasePage.btnCart.waitForClickable();
        await PurchasePage.btnCart.click();
        await PurchasePage.btnCheckout.waitForClickable();
        await PurchasePage.btnCheckout.click();
        await PurchasePage.purchase('matias','raviola','12345');
        await PurchasePage.hamburMenu.click();
        await PurchasePage.logout.waitForClickable();
        await PurchasePage.logout.click();
    });
    it('add all the products to the cart', async () => {
        await PurchasePage.login('standard_user','secret_sauce');
        await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
        await PurchasePage.btnAddBackpack.waitForClickable();
        await PurchasePage.btnAddBackpack.click();
        await PurchasePage.btnAddBikeLight.click();
        await PurchasePage.btnAddBoltTshirt.click();
        await PurchasePage.btnAddFleeceJacket.click();
        await PurchasePage.btnAddLabsOnesie.click();
        await PurchasePage.btnAddTshirtRed.click();
        const cartNumber = await $('#shopping_cart_container > a > span').getText();
        await expect(cartNumber).toBe('6')
    });
        it('descart all the products to the cart', async () => {
        await PurchasePage.hamburMenu.click();
        await PurchasePage.resetCart.waitForClickable();
        await PurchasePage.resetCart.click();
        const cart = await $('#shopping_cart_container > a')
        await expect(cart).toHaveChildren(0)
        await PurchasePage.btnRemoveBackpack.click();
        await PurchasePage.btnRemoveBikeLight.click();
        await PurchasePage.btnRemoveBoltTshiert.click();
        await PurchasePage.btnRemoveFleeceJacket.click();
        await PurchasePage.btnRemoveLabsOnesie.click();
        await PurchasePage.btnRemoveTshirtRed.click();
    });
    it('complete the sell with empty/imcomplete checkout information', async () => {
        await PurchasePage.btnAddBackpack.waitForClickable();
        await PurchasePage.btnAddBackpack.click();
        const cartNumber = await $('#shopping_cart_container > a > span').getText();
        await expect(cartNumber).toBe('1');
        await PurchasePage.btnCart.waitForClickable();
        await PurchasePage.btnCart.click();
        await PurchasePage.btnCheckout.waitForClickable();
        await PurchasePage.btnCheckout.click();
        await PurchasePage.btnContinue.waitForClickable();
        await PurchasePage.btnContinue.click();
        await expect(PurchasePage.msgError).toHaveText("Error: First Name is required");
        browser.refresh()
        await PurchasePage.purchase('','raviola','12345');
        await expect(PurchasePage.msgError).toHaveText("Error: First Name is required");
        browser.refresh()
        await PurchasePage.purchase('matias','','12345');
        await expect(PurchasePage.msgError).toHaveText("Error: Last Name is required");
        browser.refresh()
        await PurchasePage.purchase('matias','raviola','');
        await expect(PurchasePage.msgError).toHaveText("Error: Postal Code is required");
        await PurchasePage.hamburMenu.click();
        await PurchasePage.logout.waitForClickable();
        await PurchasePage.logout.click();
    });
});