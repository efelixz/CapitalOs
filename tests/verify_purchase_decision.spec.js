import { test, expect } from '@playwright/test';

test('capture purchase decision screen', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('http://localhost:5173');

  // Debug: Wait for load and take screenshot of what we see
  await page.waitForLoadState('networkidle');
  await page.screenshot({ path: 'verification/debug_initial.png' });

  // Try to find the button more generically if needed, but let's try to wait for any text first
  await page.waitForSelector('h1', { timeout: 10000 });

  // Click on "Simular" button
  await page.click('text=Simular');

  // Wait for the screen to transition
  await page.waitForSelector('text=Decisões de Compra', { timeout: 10000 });

  // Take screenshot
  await page.screenshot({ path: 'verification/purchase_decision_v1.png', fullPage: true });
});
