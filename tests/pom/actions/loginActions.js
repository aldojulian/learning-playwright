import loginLocator from '../locator/loginLocator';
import { expect } from "@playwright/test";

export default class loginActions {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.loginLocator = new loginLocator();
        this.inputUsername = page.locator(this.loginLocator.inputUsername);
        this.inputPassword = page.locator(this.loginLocator.inputPassword);
        this.clickButton = page.locator(this.loginLocator.buttonLogin);
        this.buttonAddToCart = page.locator(this.loginLocator.buttonAddToCart);
        this.buttonCart = page.locator(this.loginLocator.buttonCart);
        this.buttonCheckout = page.locator(this.loginLocator.buttonCheckout);
        this.inputFirstName = page.locator(this.loginLocator.inputFirstName);
        this.inputLastName = page.locator(this.loginLocator.inputLastName);
        this.inputPostalCode = page.locator(this.loginLocator.inputPostalCode);
        this.buttonContinue = page.locator(this.loginLocator.buttonContinue);
        this.buttonFinish = page.locator(this.loginLocator.buttonFinish);
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async inputLogin() {
        await this.inputUsername.fill('standard_user');
        await expect(this.inputUsername).toHaveValue('standard_user');
        await this.inputPassword.fill('secret_sauce');
        await expect(this.inputPassword).toHaveValue('secret_sauce');
        await this.clickButton.click();
        // await this.buttonAddToCart.click();
        // await this.buttonCart.click();
        // await this.buttonCheckout.click();
        // await this.inputFirstName.fill('Aldo');
        // await expect(this.inputFirstName).toHaveValue('Aldo');
        // await this.inputLastName.fill('Julian');
        // await expect(this.inputLastName).toHaveValue('Julian');
        // await this.inputPostalCode.fill('16517');
        // await expect(this.inputPostalCode).toHaveValue('16517');
        // await this.buttonContinue.click();
        // await this.buttonFinish.click();
    }

    async checkout() {
        await this.buttonAddToCart.click();
        await this.buttonCart.click();
        await this.buttonCheckout.click();
    }

    async inputData() {
        await this.inputFirstName.fill('Aldo');
        await expect(this.inputFirstName).toHaveValue('Aldo');
        await this.inputLastName.fill('Julian');
        await expect(this.inputLastName).toHaveValue('Julian');
        await this.inputPostalCode.fill('16517');
        await expect(this.inputPostalCode).toHaveValue('16517');
        await this.buttonContinue.click();
        await this.buttonFinish.click();
    }
}
