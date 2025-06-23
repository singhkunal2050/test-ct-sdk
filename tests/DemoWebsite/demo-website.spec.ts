import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.clevertap.com/');
  await page.getByRole('button', { name: 'Come On In' }).click();
  await page.getByRole('button', { name: 'Use Feature Demo' }).click();
  await page.getByRole('button', { name: 'Use Demo' }).nth(3).click();
  await page.getByRole('button', { name: 'Use Demo' }).nth(3).click();
  await page.locator('.v-img__img').first().click();
  await page.getByRole('img', { name: 'Web Inbox' }).click();
  await page.locator('#app div').filter({ hasText: /^Hi thereWould you like to see more products in other categories\?$/ }).first().click();
  await page.getByRole('navigation').filter({ hasText: 'Web InboxHi thereWould you' }).getByRole('img').first().click();
  await page.getByRole('img', { name: 'Web Inbox' }).click();
  await page.getByRole('navigation').filter({ hasText: 'Web InboxHi thereWould you' }).getByRole('img').first().click();
  await page.locator('div:nth-child(2) > .add-to-cart > .v-btn').first().click();
  await page.locator('.v-navigation-drawer__scrim').click();
  await page.getByRole('img', { name: 'Cart' }).click();
  await page.getByText('Luxe Scented Perfume', { exact: true }).click();
  await page.getByRole('button', { name: 'Place Order' }).click();
  await page.getByRole('button', { name: 'Skip for now' }).click();
});