import { test, expect } from '@playwright/test';

//ngambil auth dari test case login (ini temporary)
//test.use({ storageState: 'auth.json'});


test('Click add item', async ({ page }) => {
 await page.goto('https://www.saucedemo.com/inventory.html');   

 const additemBag = page.locator('#add-to-cart-sauce-labs-backpack'); 
 await additemBag.click();

});