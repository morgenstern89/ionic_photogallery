import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
// import browserify from "@cypress/browserify-preprocessor";

module.exports = (on: any, config: any) => {
  // Configure Cucumber preprocessor
  addCucumberPreprocessorPlugin(on, config);
  return config;
};
