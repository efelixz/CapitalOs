import { test, expect } from '@playwright/test';

test('capture wallet screen', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('http://localhost:5173');

  // Click on "CARTEIRA" in bottom nav
  await page.click('text=CARTEIRA');

  // Wait for the screen to transition
  await page.waitForSelector('text=Minha Carteira');

  // Take screenshot
  await page.screenshot({ path: 'verification/wallet_v1.png', fullPage: true });
});
