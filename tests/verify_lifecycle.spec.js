import { test, expect } from '@playwright/test';

const iPhone13 = { width: 390, height: 844 };
test.use({ viewport: iPhone13, deviceScaleFactor: 3, isMobile: true, hasTouch: true });

test('verify complete user lifecycle', async ({ page }) => {
  await page.goto('http://localhost:5173');

  // 1. Landing -> Onboarding
  await expect(page.locator('text=Riqueza Ativa.')).toBeVisible();
  await page.locator('button:has-text("EXPERIMENTAR CAPITALOS")').click();

  // 2. Onboarding -> Auth
  await page.locator('button:has-text("COMEÇAR AGORA")').click();
  await page.locator('button:has-text("PULAR CONEXÃO")').click();

  // 3. Auth -> Risk Profile
  await page.locator('button:has-text("Entrar")').click();
  await page.locator('button:has-text("Confirmar Código")').click();

  // 4. Risk Profile -> Dashboard
  await page.locator('button:has-text("Moderado")').click();
  await page.locator('button:has-text("Continuar")').click();

  // 5. Dashboard Verification
  await expect(page.locator('text=Patrimônio Líquido')).toBeVisible();
  await expect(page.locator('text=Prioridade #1')).toBeVisible();

  // 6. Navigation Check (6 tabs)
  await expect(page.locator('nav button')).toHaveCount(6);

  // 7. Drill-down Check (Extrato)
  await page.locator('button:has-text("Extrato")').click();
  await expect(page.locator('h1:has-text("Transações")')).toBeVisible();
  await expect(page.locator('button:has(svg.lucide-plus)')).toBeVisible();
});
