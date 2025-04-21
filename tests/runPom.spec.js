import { test } from '@playwright/test';
const { default: loginActions } = require('../tests/pom/actions/loginActions');

test('Page object models', async ({ page }) => {
    const loginObj = new loginActions(page);
    await loginObj.goto();
    await loginObj.inputLogin();
    await loginObj.checkout();
    await loginObj.inputData();
}); 