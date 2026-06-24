const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ channel: 'chrome' });
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await page.goto('http://localhost:8000/index.html', { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'D:\\projects\\elearning-im\\screenshot.png', fullPage: false });
  await browser.close();
  console.log('Screenshot taken');
})();