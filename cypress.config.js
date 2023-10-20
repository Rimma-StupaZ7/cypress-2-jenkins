const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "uyijmu",
  e2e: {
    supportFile: "cypress/support/e2e.js",
    baseUrl: "http://qamid.tmweb.ru",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
