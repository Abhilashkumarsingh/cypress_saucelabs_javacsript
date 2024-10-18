const { defineConfig } = require("cypress");
const {allureCypress}  = require("allure-cypress/reporter");

module.exports = defineConfig({
  e2e: {
    supportFile: false,
    baseUrl: 'https://www.saucedemo.com/v1',
    setupNodeEvents: (on, config) => {
      allureCypress(on, {
        resultsDir: "./allure-results",
      });

      return config;
    },
  }
});
