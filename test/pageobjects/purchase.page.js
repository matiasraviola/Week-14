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
    get btnAddCart () {
        return $('#add-to-cart-sauce-labs-bike-light');
    }
    get btnCheckout () {
        return $('#checkout');
    }
    get hamburMenu () {
        return $('#react-burger-menu-btn');
    }
    get logout () {
        return $('#logout_sidebar_link');
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
