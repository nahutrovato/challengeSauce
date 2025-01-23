const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
const dotenv = require('dotenv');
dotenv.config();

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on),
      on("file:preprocessor", cucumber());
      config.env = {
        ...config.env,
        BASE_URL: process.env.BASE_URL,
        USERNAME: process.env.USERNAME,
        PASSWORD: process.env.PASSWORD,
      };
      return config;
    },
    specPattern: 'cypress/e2e/features/**/*.feature',
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Challenge PinApp - Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
});
