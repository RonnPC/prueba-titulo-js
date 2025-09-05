const { test, expect } = require('@playwright/test');

const casos = [
    { name: "Caso 1 ", url: "https://example.com/", esperado: "Example Domain"},
    { name: "Caso 2 ", url: "https://example.com/", esperado: /Example/},
    { name: "Caso 3 ", url: "https://www.google.com/", esperado: "Google"},
    { name: "Caso 4 ", url: "https://www.google.com/", esperado: /Google/}
]

for (const {name, url, esperado} of casos) {
    test (`valida el título correcto en ${name}`, async ({ page }) => {
    //abre la pagina example.com
        await page.goto(url);
        await sleep (3000);
    
        // Verificamos el titulo exacto
        await expect(page).toHaveTitle(esperado);
    });
}

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}