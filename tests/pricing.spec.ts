import { test, expect } from '@playwright/test';

test('pricing section renders correctly', async ({ page }) => {
  await page.goto('http://localhost:3001');

  // Check for the section title
  const title = page.locator('h2:has-text("Social Media & Video Ads Packages")');
  await expect(title).toBeVisible();

  // Check for the three packages
  const basicPackage = page.locator('h3:has-text("Basic Visibility Package")');
  const businessPackage = page.locator('h3:has-text("Business Growth Package")');
  const dominancePackage = page.locator('h3:has-text("Brand Dominance Package")');

  await expect(basicPackage).toBeVisible();
  await expect(businessPackage).toBeVisible();
  await expect(dominancePackage).toBeVisible();

  // Check for prices
  await expect(page.locator('text=₹15,000')).toBeVisible();
  await expect(page.locator('text=₹25,000')).toBeVisible();
  await expect(page.locator('text=₹30,000')).toBeVisible();

  // Check for "Optional Add-Ons" and "Important Notes"
  await expect(page.locator('text=Optional Add-Ons')).toBeVisible();
  await expect(page.locator('text=Important Notes')).toBeVisible();

  // Check if "Get Started" buttons link to contact page
  const getStartedButtons = page.locator('a:has-text("Get Started")');
  const count = await getStartedButtons.count();
  expect(count).toBe(3);
  
  for (let i = 0; i < count; i++) {
    await expect(getStartedButtons.nth(i)).toHaveAttribute('href', '/contact');
  }
});
