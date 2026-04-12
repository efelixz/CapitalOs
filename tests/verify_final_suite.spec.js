import { test, expect } from '@playwright/test';

const iPhone13 = { width: 390, height: 844 };
test.use({ viewport: iPhone13, deviceScaleFactor: 3, isMobile: true, hasTouch: true });

test('verify final suite including chat and profile', async ({ page }) => {
  await page.goto('http://localhost:5173');

  // 1. Dashboard -> Profile (via Avatar)
  await page.locator('img[alt="User"]').click();
  await expect(page.locator('h1:has-text("Gabriel Alcantara")')).toBeVisible();
  await page.screenshot({ path: 'verification/profile_screen.png' });

  // 2. Nav -> Chat
  await page.locator('nav button:has-text("Chat")').click();
  await expect(page.locator('h1:has-text("Concierge AI")')).toBeVisible();
  await page.screenshot({ path: 'verification/chat_screen.png' });

  // 3. Nav -> Metas (Verify persistent nav)
  await page.locator('nav button:has-text("Metas")').click();
  await expect(page.locator('h1:has-text("Metas")')).toBeVisible();

  // 4. Nav -> Extrato
  await page.locator('nav button:has-text("Extrato")').click();
  await expect(page.locator('h1:has-text("Transações")')).toBeVisible();
});
