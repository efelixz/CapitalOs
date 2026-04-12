import { test, expect } from '@playwright/test';

test.use({
  viewport: { width: 390, height: 844 },
  userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1',
});

test('verify insights screen', async ({ page }) => {
  await page.goto('http://localhost:5173');

  // Take initial screenshot to see what's happening
  await page.screenshot({ path: 'verification/debug_app.png' });

  // Try clicking by text and being more specific
  const insightsBtn = page.locator('button', { hasText: 'INSIGHTS' });
  await insightsBtn.click();

  // Wait for content
  await page.waitForSelector('text=Insights AI');

  // Take screenshot
  await page.screenshot({ path: 'verification/insights_v1.png' });

  // Verify some content
  await expect(page.locator('text=Consolidação de Juros')).toBeVisible();
});
