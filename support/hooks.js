const { Before, After, BeforeAll, AfterAll } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

let browser;

BeforeAll(async function () {
  browser = await chromium.launch({ headless: true });
});

AfterAll(async function () {
  if (browser) await browser.close();
});

Before({ tags: '@ui' }, async function () {
  this.context = await browser.newContext();
  this.page = await this.context.newPage();
});

After({ tags: '@ui' }, async function () {
  if (this.page) await this.page.close();
  if (this.context) await this.context.close();
});
