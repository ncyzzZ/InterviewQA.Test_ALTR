const { Given, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

const BASE_URL = 'https://qa-practice.razvanvancea.ro/auth_ecommerce.html';

Given('I have submitted an order with street {string} city {string} and country {string}', async function (street, city, country) {
    await this.page.goto(BASE_URL);
  await this.page.locator('input[type="email"]').fill('admin@admin.com');
  await this.page.locator('input[type="password"]').fill('admin123');
  await this.page.locator('button[type="submit"]').click();
  await this.page.waitForSelector('.shop-item', { timeout: 5000 });
  await this.page.locator('.shop-item-button').first().click();
  await this.page.waitForTimeout(500);
  await this.page.locator('.btn-purchase').click();
  await this.page.waitForSelector('#shipping-address', { state: 'visible', timeout: 5000 });
  await this.page.locator('input[name="phone"]').fill('0812345678');
  await this.page.locator('input[name="street"]').fill(street);
  await this.page.locator('input[name="city"]').fill(city);
  await this.page.locator('#countries_dropdown_menu').selectOption({ label: country });
  await this.page.locator('#submitOrderBtn').click();
  await this.page.waitForTimeout(1500);
});

Then('the displayed address should be {string}', async function (expectedAddress) {
    const messageEl = this.page.locator('#message');
  await expect(messageEl).toBeVisible({ timeout: 5000 });
  const text = await messageEl.textContent();
  expect(text).toContain(expectedAddress);
});
