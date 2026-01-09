import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { retirementPage } from "../../../pages/retirementPage";

Given('I navigate to the Blankfactor home page', () => {
  retirementPage.visit();
});

Given('I accept the cookie policy if displayed', () => {
  retirementPage.acceptPolicy();
});

When('I access the {string} section under the {string} menu', (section, menu) => {
  retirementPage.navigateToIndustry(menu, section);
});

When('I go to the {string} section', (sectionTitle) => {
  retirementPage.scrollToSection(sectionTitle);
});

When('I capture the detailed information for the {string} card', (cardName) => {
  // Solo llamamos al método, el manejo de asincronía ocurre dentro del POM
  retirementPage.getCardBackText(cardName);
});

When('I proceed to the contact page via {string}', (buttonText) => {
  retirementPage.clickButtonByText(buttonText);
});

Then('I should be redirected to the contact page', () => {
  cy.url().should('include', '/contact');
});

Then('the page title should be captured and displayed', () => {
  cy.title().then((title) => {
    cy.log('Page Title: ' + title);
    expect(title).to.not.be.empty;
  });
});