import { test, expect } from '@playwright/test';

const iPhone13 = { width: 390, height: 844 };
test.use({ viewport: iPhone13, deviceScaleFactor: 3, isMobile: true, hasTouch: true });

test('verify end-to-end ecosystem flow', async ({ page }) => {
  await page.goto('http://localhost:5173');

  // 1. Onboarding
  await expect(page.locator('text=Sob Controle.')).toBeVisible();
  await page.screenshot({ path: 'verification/step1_onboarding.png' });
  await page.locator('button:has-text("COMEÇAR AGORA")').click();

  // 2. Auth
  await expect(page.locator('text=Bem-vindo')).toBeVisible();
  await page.screenshot({ path: 'verification/step2_auth.png' });
  await page.locator('button:has-text("Entrar")').click();

  // MFA
  await expect(page.locator('text=Verificação')).toBeVisible();
  await page.screenshot({ path: 'verification/step2_mfa.png' });
  await page.locator('button:has-text("Confirmar Código")').click();

  // 3. Risk Profile
  await expect(page.locator('text=Qual seu perfil')).toBeVisible();
  await page.screenshot({ path: 'verification/step3_risk.png' });
  await page.locator('button:has-text("Moderado")').click();
  await page.locator('button:has-text("Continuar")').click();

  // 4. Dashboard
  // Wait for the specific text and use a more flexible locator
  await expect(page.getByText('Patrimônio Líquido')).toBeVisible({ timeout: 10000 });
  await page.screenshot({ path: 'verification/step4_dashboard.png' });

  // 5. Check secondary navigation (Settings via Profile)
  await page.locator('img[alt="User"]').click();
  await expect(page.getByText('Gabriel Alcantara')).toBeVisible();
  await page.locator('button:has-text("Preferências do App")').click();
  await expect(page.getByText('Configurações')).toBeVisible();
  await page.screenshot({ path: 'verification/step5_settings.png' });
});
