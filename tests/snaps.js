import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 390, height: 844 });

  const screens = [
    'dashboard', 'wallet', 'insights', 'goals', 'chat', 'mobility',
    'stress_test', 'purchase_decision', 'global_map', 'family_office',
    'executive_briefing', 'stock_analysis', 'life_sim', 'fixed_income'
  ];

  for (let i = 0; i < screens.length; i++) {
    await page.goto('http://localhost:5173/');
    await page.waitForTimeout(1000);
    await page.evaluate((s) => {
        if (window.setCapitalOSScreen) window.setCapitalOSScreen(s);
    }, screens[i]);
    await page.waitForTimeout(1000);
    await page.screenshot({ path: `screen_${i + 1}_${screens[i]}.png` });
    console.log(`Captured ${screens[i]}`);
  }

  await browser.close();
})();
