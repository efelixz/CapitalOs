import { test, expect } from '@playwright/test';

const iPhone13 = { width: 390, height: 844 };
test.use({ viewport: iPhone13, deviceScaleFactor: 3, isMobile: true, hasTouch: true });

test('verify streamlined navigation and layout', async ({ page }) => {
  await page.goto('http://localhost:5173');

  await page.locator('nav button:has-text("Metas")').click();
  await expect(page.locator('h1:has-text("Metas")')).toBeVisible();

  // Try to find the exact element that has the click handler
  // It's a Card with variant="premium"
  await page.locator('div:has-text("Previsão de Independência")').last().click();

  await page.waitForTimeout(1000);
  const text = await page.innerText('body');
  console.log('Body text after click on goals card:', text);

  await expect(page.locator('h1:has-text("Simulador de Vida")')).toBeVisible();
});
