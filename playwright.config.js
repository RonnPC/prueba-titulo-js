/** @type  {import('@playwright/test').PlaywrightTest.Config} */

const config = {
    use:{
        screenshot: 'only-on-failure',
        trace: 'retain-on-failure'
    },
    projects: [
        { name: 'Chromium', use: {browserName: "chromium"}},
    ],
    testDir: "tests",
    timeout: 3000,
    expect: {
        timeout: 5000,
    },     
};

module.exports = config