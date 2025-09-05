const { test, expect } = require('@playwright/test');

test('valida el título exacto', async ({ page }) => {
    //abre la pagina example.com
    await page.goto('https://example.com/');
    await sleep (3000);

    // Verificamos el titulo exacto
    await expect(page).toHaveTitle('Example Domain');
});

test ('Valida titulo con regex (contiene palabra)', async ({page}) => {
     //abre la pagina example.com
    await page.goto('https://example.com/');
    await sleep (3000);

    // Verificamos palabra
    await expect(page).toHaveTitle(/Example/);

});

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}