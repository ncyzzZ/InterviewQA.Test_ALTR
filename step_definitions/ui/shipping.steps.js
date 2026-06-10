const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

const BASE_URL = 'https://qa-practice.razvanvancea.ro/auth_ecommerce.html';

async function loginAndGoToShipping(page) {
    await page.goto(BASE_URL);
    await page.locator('input[type="email"]').fill('admin@admin.com');
    await page.locator('input[type="password"]').fill('admin123');
    await page.locator('button[type="submit"]').click();
    await page.waitForSelector('.shop-item', { timeout: 5000 });
    const firstItem = page.locator('.shop-item-button').first();
    await firstItem.click();
    await page.waitForTimeout(500);
    await page.locator('.btn-purchase').click();
    await page.waitForSelector('#shipping-address', { state: 'visible', timeout: 5000 });
}

Given('I am on the Shipping Details page', async function () {
    await loginAndGoToShipping(this.page);
});

When('I fill in {string} with {string}', async function (fieldName, value) {
    if (fieldName === 'phone') {
          await this.page.locator('input[name="phone"]').fill(value);
    } else if (fieldName === 'street') {
          await this.page.locator('input[name="street"]').fill(value);
    } else if (fieldName === 'city') {
          await this.page.locator('input[name="city"]').fill(value);
    }
});

When('I select country {string}', async function (country) {
    await this.page.locator('#countries_dropdown_menu').selectOption({ label: country });
});

Then('I should see the Order Confirmation page', async function () {
    await expect(this.page.locator('#message')).toBeVisible({ timeout: 5000 });
    const text = await this.page.locator('#message').textContent();
    expect(text.trim().length).toBeGreaterThan(0);
});

Then('the order should not be submitted', async function () {
    const isShippingVisible = await this.page.locator('#shipping-address').isVisible();
    expect(isShippingVisible).toBeTruthy();
});
