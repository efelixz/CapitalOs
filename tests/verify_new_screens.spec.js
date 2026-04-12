import { test, expect } from '@playwright/test';

const iPhone13 = { width: 390, height: 844 };
test.use({ viewport: iPhone13, deviceScaleFactor: 3, isMobile: true, hasTouch: true });

test('verify health and goals screens', async ({ page }) => {
  await page.goto('http://localhost:5173');

  // 1. Dashboard -> Health Score
  await page.locator('text=82').first().click();
  await expect(page.locator('text=Saúde Financeira')).toBeVisible();
  await page.screenshot({ path: 'verification/health_screen.png' });

  // Go back
  await page.click('button:has-text("Voltar")');
  await expect(page.locator('text=Patrimônio Líquido')).toBeVisible();

  // 2. Nav -> Metas
  await page.locator('nav button:has-text("Metas")').click();
  await expect(page.locator('h1:has-text("Metas")')).toBeVisible();
  await expect(page.locator('h3:has-text("Reserva de Emergência")')).toBeVisible();
  await page.screenshot({ path: 'verification/goals_screen.png' });
});
