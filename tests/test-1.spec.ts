import { test, expect } from '@playwright/test';

test('Web Popup to render when Pus', async ({ page }) => {
  await page.goto('https://clevertap-sdk-test.netlify.app/?region=eu1&accountId=ZWW-WWW-WWRZ&token=000-001');
   // Listen for console messages
   page.on('console', msg => {
    console.log(`[Console] ${msg.type()}: ${msg.text()}`);
  });
  
  await page.locator('#constantOUL').click();
  await page.locator('#constantOUL').fill('test');
  await page.getByRole('button', { name: 'OUL', exact: true }).click();
  await page.locator('#adc').check();
  await page.getByRole('button', { name: 'Push Selected Events' }).click();
  await page.locator('#wiz-iframe-intent').contentFrame().getByText('TestingDescriotuo DescriotuoDescriotuo Descriotuo×').click();
  await page.locator('#wiz-iframe-intent').contentFrame().getByText('Testing').click();
  await page.locator('#wiz-iframe-intent').contentFrame().getByText('×').click();
});2