import { test, expect } from '@playwright/test';

test('E2E login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  const inputUsername = page.locator('#user-name');
  await inputUsername.fill('standard_user');
  await expect(inputUsername).toHaveValue('standard_user');

  const inputPassword = page.locator('#password');
  await inputPassword.fill('secret_sauce');
  await expect(inputPassword).toHaveValue('secret_sauce');

  const buttonLogin = page.locator('#login-button'); 
  await buttonLogin.click();

  //simpen auth 
  await page.context().storageState({ path: 'auth.json'});

});