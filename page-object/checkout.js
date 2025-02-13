class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.firstNameInput = page.locator('#first-name');
        this.lastNameInput = page.locator('#last-name');
        this.postalCodeInput = page.locator('#postal-code');
        this.continueButton = page.locator('.btn_primary.cart_button');
        this.finishButton = page.locator('.btn_action.cart_button'); 
        this.successMessage = page.locator('.complete-header');
        this.errorMessage = page.locator('[data-test="error"]');
    }

    async fillCheckoutForm(user) {
        await this.firstNameInput.fill(user.firstName);
        await this.lastNameInput.fill(user.lastName);
        await this.postalCodeInput.fill(user.postalCode);
        await this.continueButton.click();
    }

    async finishPurchase() {
        await this.finishButton.waitFor(); 
        await this.finishButton.click();
    }

    async validateSuccess() {
        await this.successMessage.waitFor(); 
        return await this.successMessage.textContent(); 
    }

    async getErrorMessage() {
        return this.errorMessage.textContent();
    }
}

module.exports = CheckoutPage;
