/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  use: {
    screenshot: "only-on-failure",
    trace: "retain-on-failure",
  },
  projects: [
    {
      name: "Chromium", use: { browserName: "chromium" },
    },
    {
      name: "Chrome", use: { browserName: "chromium", channel: "chrome" }, // Canal Chrome
    },
    {
      name: "Edge", use: { browserName: "chromium", channel: "msedge" }, // Canal Edge
    },
  ],
  testDir: "tests",
  timeout: 10000,
  expect: {
    timeout: 5000,
  },
};

module.exports = config;