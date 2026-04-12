import { test, expect } from '@playwright/test';

test.use({
  viewport: { width: 390, height: 844 },
  userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1',
});

test('capture all screens', async ({ page }) => {
  await page.goto('http://localhost:5173');

  // Dashboard
  await page.screenshot({ path: 'verification/final_1_dashboard.png' });

  // Wallet
  await page.click('button:has-text("Carteira")');
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'verification/final_2_wallet.png' });

  // Insights
  await page.click('button:has-text("Insights")');
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'verification/final_3_insights.png' });

  // Simular
  await page.click('button:has-text("Simular")');
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'verification/final_4_simulation.png' });
});
