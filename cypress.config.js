const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");


async function setupNodeEvents(on, config) {
await preprocessor.addCucumberPreprocessorPlugin(on, config);
on("file:preprocessor", browserify.default(config),);
return config;
}

module.exports = defineConfig({

  e2e: {
    setupNodeEvents,
    baseUrl: 'https://proxima.sisprevweb.com.br/esocial_testeaut/',
    watchForFileChanges:false,
    video: false,
    chromeWebSecurity: false,
    experimentalModifyObstructiveThirdPartyCode: true,
    defaultCommandTimeout: 9000,
    viewportWidth: 1750,
    viewportHeight: 720,
    experimentalRunAllSpecs: true,
    specPattern: [
      'cypress/e2e/**/*.feature',
    ], 
  }
});