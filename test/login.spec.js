import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://virtual.tdea.edu.co/');
  await page.getByRole('link', { name: 'Acceder' }).click();
  await page.getByRole('textbox', { name: 'Nombre de usuario' }).click();
  await page.getByRole('textbox', { name: 'Nombre de usuario' }).fill('');
  await page.getByRole('textbox', { name: 'Contraseña' }).click();
  await page.getByRole('textbox', { name: 'Contraseña' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Contraseña' }).fill('H');
  await page.getByRole('textbox', { name: 'Contraseña' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Contraseña' }).fill('');
  await page.getByRole('button', { name: 'Acceder' }).click();
});