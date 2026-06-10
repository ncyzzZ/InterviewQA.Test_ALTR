const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

const BASE_URL = 'https://qa-practice.razvanvancea.ro/auth_ecommerce.html';

Given('I am on the login page', async function () {
  await this.page.goto(BASE_URL);
    await this.page.waitForSelector('input[type="email"]');
    });

    When('I enter email {string} and password {string}', async function (email, password) {
      await this.page.locator('input[type="email"]').fill(email);
        await this.page.locator('input[type="password"]').fill(password);
        });

        When('I click the Submit button', async function () {
          await this.page.locator('button[type="submit"]').click();
            await this.page.waitForTimeout(1500);
            });

            Then('I should see the Shopping Cart page', async function () {
              await expect(this.page.locator('text=SHOPPING CART')).toBeVisible({ timeout: 5000 });
              });

              Then('I should remain on the login page', async function () {
                const isEmailVisible = await this.page.locator('input[type="email"]').isVisible().catch(() => false);
                  const isCartVisible = await this.page.locator('text=SHOPPING CART').isVisible().catch(() => false);
                    expect(isEmailVisible || !isCartVisible).toBeTruthy();
                    });
