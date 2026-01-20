import { test, expect } from '@playwright/test';

test.beforeAll(() => {
  console.log('🌐 UI TEST STARTED');
});

test('UI – SauceDemo Login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await expect(page).toHaveURL(/inventory/);
  console.log('✅ Login Successful');
});

test.afterAll(() => {
  console.log('🏁 UI TEST COMPLETED');
});
