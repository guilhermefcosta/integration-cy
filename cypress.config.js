const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "xxf6zm",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: true,
      html: true,
      json: false,
      timestamp: "ddmmyyyy_HHMMss",
      code: true,
      charts: true,
      reportTitle: "Meu titulo" 
    }
  }, 
});
