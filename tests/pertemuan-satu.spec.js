import { test, expect } from '@playwright/test';

test('E2E dari login ke Checkout', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  const inputUsername = page.locator('#user-name');
  await inputUsername.fill('standard_user');
  await expect(inputUsername).toHaveValue('standard_user');

  const inputPassword = page.locator('#password');
  await inputPassword.fill('secret_sauce');
  await expect(inputPassword).toHaveValue('secret_sauce');

  const buttonLogin = page.locator('#login-button');
  await buttonLogin.click();

  const buttonAddToCart = page.locator('#add-to-cart-sauce-labs-backpack');
  await buttonAddToCart.click();

  const buttonCart = page.locator('#shopping_cart_container > a');
  await buttonCart.click();

  const buttonCheckout = page.locator('#checkout');
  await buttonCheckout.click();

  const inputFirstName = page.locator('#first-name');
  await inputFirstName.fill('Aldo');
  await expect(inputFirstName).toHaveValue('Aldo');

  const inputLastName = page.locator('#last-name');
  await inputLastName.fill('Julian');
  await expect(inputLastName).toHaveValue('Julian');

  const inputPostalCode = page.locator('#postal-code');
  await inputPostalCode.fill('16517');
  await expect(inputPostalCode).toHaveValue('16517');

  const buttonContinue = page.locator('#continue');
  await buttonContinue.click();

  const buttonFinish = page.locator('#finish');
  await buttonFinish.click();

});