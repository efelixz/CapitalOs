import { test, expect } from '@playwright/test';

test('navigate to markets from dashboard', async ({ page }) => {
  await page.goto('http://localhost:5173');

  // Wait for dashboard to load
  await expect(page.locator('text=PATRIMÔNIO LÍQUIDO')).toBeVisible();

  // Find the USD card.
  // It has text USD and text R$ 4,92
  const usdCard = page.locator('div').filter({ hasText: /^USD.*R\$ 4,92/ }).first();
  await usdCard.click();

  // Check if we are on Markets screen
  // Title is "Monitor Global"
  await expect(page.locator('text=Monitor Global')).toBeVisible();
  await expect(page.locator('text=Dólar Americano (USD)')).toBeVisible();

  // Take screenshot
  await page.screenshot({ path: 'verification/markets_screen_verified.png' });

  // Go back
  await page.click('button:has-text("Voltar")');
  await expect(page.locator('text=PATRIMÔNIO LÍQUIDO')).toBeVisible();
});
