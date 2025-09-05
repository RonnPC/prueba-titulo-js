const { test, expect } = require('@playwright/test');

test('valida el título exacto', async ({ page }) => {
    //abre la pagina facebook.com
    await page.goto('https://www.facebook.com/');
    await sleep (3000);

    // Verificamos el titulo exacto
    await expect(page).toHaveTitle('Facebook - log in or sign up')
});

test ('Valida titulo con regex (contiene palabra)', async ({page}) => {
     //abre la pagina example.com
    await page.goto('https://www.facebook.com/')
    await sleep (3000);

    // Verificamos palabra
    await expect(page).toHaveTitle(/Facebook/)

});

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}