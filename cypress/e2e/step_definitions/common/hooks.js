import { After } from "@badeball/cypress-cucumber-preprocessor";

After(function (scenario) {
  if (scenario.result.status === "FAILED") {
    cy.log('Test fallido: capturando evidencia...');
  }
});