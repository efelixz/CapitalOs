import { test, expect } from '@playwright/test';

test('verify navigation between screens', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('http://localhost:5173');

  // Dashboard is visible
  await expect(page.locator('h1')).toContainText('CapitalOS');

  // Navigate to Simular (Quick Action)
  await page.click('button:has-text("Simular")');
  await expect(page.locator('h1')).toContainText('Decisões de Compra');

  // Navigate back using the header button (which has the ArrowLeft icon)
  // Let's use the h1 as a relative marker or the fact that it's the first button in the sticky header
  await page.click('div.sticky button');
  await expect(page.locator('h1')).toContainText('CapitalOS');

  // Navigate via bottom nav
  await page.click('text=SIMULAR');
  await expect(page.locator('h1')).toContainText('Decisões de Compra');
});
