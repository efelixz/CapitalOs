import { test, expect } from '@playwright/test';

test.use({
  viewport: { width: 390, height: 844 },
  userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1',
});

test('verify transactions and navigation', async ({ page }) => {
  await page.goto('http://localhost:5173');

  // Go to Transactions
  await page.click('button:has-text("Transações")');
  await page.waitForSelector('text=Fluxo de Caixa Inteligente');
  await page.screenshot({ path: 'verification/final_5_transactions.png' });

  // Go back to Home
  await page.click('button:has-text("Início")');

  // Click "Investir" action on dashboard
  await page.click('button:has-text("Investir")');
  await page.waitForSelector('text=Minha Carteira');

  // Click "Analisar" action on dashboard (via Home first)
  await page.click('button:has-text("Início")');
  await page.click('button:has-text("Analisar")');
  await page.waitForSelector('text=Insights AI');
});
