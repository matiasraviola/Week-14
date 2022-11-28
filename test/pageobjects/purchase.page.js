class PurchasePage {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#user-name');
    }
    get inputPassword () {
        return $('#password');
    }
    get inputFirstName () {
        return $('#first-name');
    }
    get inputLastName () {
        return $('#last-name');
    }
    get inputZip () {
        return $('#postal-code');
    }
    get btnLogin () {
        return $('#login-button');
    }
    get btnContinue () {
        return $('#continue');
    }
    get btnFinish () {
        return $('#finish');
    }
    get btnBackHome (){
        return $('#back-to-products');
    }
    get btnCart () {
        return $('#shopping_cart_container');
    }
    get btnAddBikeLight () {
        return $('#add-to-cart-sauce-labs-bike-light');
    }
    get btnAddBackpack () {
        return $('#add-to-cart-sauce-labs-backpack');
    }
    get btnAddBoltTshirt () {
        return $('#add-to-cart-sauce-labs-bolt-t-shirt');
    }
    get btnAddFleeceJacket () {
        return $('#add-to-cart-sauce-labs-fleece-jacket');
    }
    get btnAddTshirtRed () {
        return $('//*[@id="add-to-cart-test.allthethings()-t-shirt-(red)"]');
    }
    get btnAddLabsOnesie () {
        return $('#add-to-cart-sauce-labs-onesie');
    }
    get btnRemoveBackpack () {
        return $('#remove-sauce-labs-backpack');
    }
    get btnRemoveBikeLight () {
        return $('#remove-sauce-labs-bike-light');
    }
    get btnRemoveBoltTshiert () {
        return $('#remove-sauce-labs-bolt-t-shirt');
    }
    get btnRemoveFleeceJacket () {
        return $('#remove-sauce-labs-fleece-jacket');
    }
    get btnRemoveLabsOnesie () {
        return $('#remove-sauce-labs-onesie');
    }
    get btnRemoveTshirtRed () {
        return $('//*[@id="remove-test.allthethings()-t-shirt-(red)"]');
    }
    get btnCheckout () {
        return $('#checkout');
    }
    get hamburMenu () {
        return $('#react-burger-menu-btn');
    }
    get resetCart () {
        return $('#reset_sidebar_link');
    }
    get msgError () {
        return $('//*[@id="checkout_info_container"]/div/form/div[1]/div[4]/h3');
    }
    get logout () {
        return $('#logout_sidebar_link');
    }
    get twitter () {
        return $('.social_twitter');
    }
    get facebook () {
        return $('.social_facebook');
    }
    get linkedIn () {
        return $('.social_linkedin');
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }
    async purchase (firstName,lastName,zip){
        await this.inputFirstName.setValue(firstName);
        await this.inputLastName.setValue(lastName);
        await this.inputZip.setValue(zip);
        await this.btnContinue.click();
    }
}


export default new PurchasePage();
