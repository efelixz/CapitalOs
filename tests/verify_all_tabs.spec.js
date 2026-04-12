import { test, expect } from '@playwright/test';

const iPhone13 = { width: 390, height: 844 };

test.use({ viewport: iPhone13, deviceScaleFactor: 3, isMobile: true, hasTouch: true });

test('capture all main screens', async ({ page }) => {
  await page.goto('http://localhost:5173');

  // 1. Dashboard
  await expect(page.locator('text=Patrimônio Líquido')).toBeVisible();
  await page.screenshot({ path: 'verification/tab_1_dashboard.png' });

  // 2. Wallet (CARTEIRA)
  await page.locator('nav button:has-text("Carteira")').click();
  await expect(page.locator('h1:has-text("Minha Carteira")')).toBeVisible();
  await page.screenshot({ path: 'verification/tab_2_wallet.png' });

  // 3. Transactions (TRANSAÇÕES)
  await page.locator('nav button:has-text("Transações")').click();
  await expect(page.locator('h1:has-text("Transações")')).toBeVisible();
  await page.screenshot({ path: 'verification/tab_3_transactions.png' });

  // 4. Insights (INSIGHTS)
  await page.locator('nav button:has-text("Insights")').click();
  await expect(page.locator('h1:has-text("Insights AI")')).toBeVisible();
  await page.screenshot({ path: 'verification/tab_4_insights.png' });

  // 5. Simular (SIMULAR)
  await page.locator('nav button:has-text("Simular")').click();
  await expect(page.locator('h1:has-text("Decisões de Compra")')).toBeVisible();
  await page.screenshot({ path: 'verification/tab_5_simulate.png' });
});
