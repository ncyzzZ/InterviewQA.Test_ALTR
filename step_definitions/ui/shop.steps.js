const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

const BASE_URL = 'https://qa-practice.razvanvancea.ro/auth_ecommerce.html';

Given('I am logged in to the shop', async function () {
  await this.page.goto(BASE_URL);
    await this.page.locator('input[type="email"]').fill('admin@admin.com');
      await this.page.locator('input[type="password"]').fill('admin123');
        await this.page.locator('button[type="submit"]').click();
          await this.page.waitForSelector('.shop-item', { timeout: 5000 });
          });

          When('I add {string} with quantity {int} to the cart', async function (productName, quantity) {
            for (let i = 0; i < quantity; i++) {
                let found = false;
                    const pageButtons = await this.page.locator('button').filter({ hasText: /^\d+$/ }).all();
                        for (const pageBtn of pageButtons) {
                              const productCard = this.page.locator('.shop-item', { hasText: productName });
                                    const isVisible = await productCard.isVisible().catch(() => false);
                                          if (isVisible) {
                                                  await productCard.locator('.shop-item-button').click();
                                                          await this.page.waitForTimeout(300);
                                                                  found = true;
                                                                          break;
                                                                                }
                                                                                      await pageBtn.click();
                                                                                            await this.page.waitForTimeout(300);
                                                                                                }
                                                                                                    if (!found) {
                                                                                                          const productCard = this.page.locator('.shop-item', { hasText: productName });
                                                                                                                await productCard.locator('.shop-item-button').click();
                                                                                                                      await this.page.waitForTimeout(300);
                                                                                                                          }
                                                                                                                            }
                                                                                                                            });
                                                                                                                            
                                                                                                                            Then('the cart should contain {string} with quantity {int}', async function (productName, expectedQty) {
                                                                                                                              const qtyInput = this.page.locator('.cart-row', { hasText: productName }).locator('.cart-item-quantity-input');
                                                                                                                                const qty = await qtyInput.inputValue();
                                                                                                                                  expect(parseInt(qty)).toBe(expectedQty);
                                                                                                                                  });
                                                                                                                                  
                                                                                                                                  Then('the total cost should be correctly calculated', async function () {
                                                                                                                                    const diorPrice = 89.99;
                                                                                                                                      const gucciPrice = 79.99;
                                                                                                                                        const expectedTotal = (diorPrice * 2 + gucciPrice * 3).toFixed(2);
                                                                                                                                          const totalText = await this.page.locator('.cart-total-price').textContent();
                                                                                                                                            const actualTotal = parseFloat(totalText.replace('$', '').trim());
                                                                                                                                              expect(actualTotal).toBeCloseTo(parseFloat(expectedTotal), 1);
                                                                                                                                              });
                                                                                                                                              
                                                                                                                                              When('I click {string}', async function (buttonText) {
                                                                                                                                                await this.page.locator(`button:has-text("${buttonText}")`).click();
                                                                                                                                                  await this.page.waitForTimeout(1000);
                                                                                                                                                  });
                                                                                                                                                  
                                                                                                                                                  Then('I should see the Shipping Details page', async function () {
                                                                                                                                                    await expect(this.page.locator('#shipping-address')).toBeVisible({ timeout: 5000 });
                                                                                                                                                    });
