class RetirementPage {
  elements = {
    acceptPolicyBtn: () => cy.get('#PolicyConfirmattionButton'), // Selector assumed, cause not displayed
    navMenuItem: (menuName) => cy.get('nav').contains(menuName),
    industryOption: (optionName) => cy.get('h6.industry-item__title').contains(optionName),
    sectionTitle: (title) => cy.get('h2').contains(title),
    cardFront: (cardText) => cy.get('div.flip-card-front').contains(cardText),
    dynamicButton: (btnText) => cy.contains('a, button', btnText)
  }

  visit() {
    cy.visit('/'); //baseUrl from .config.js
  }

  acceptPolicy() {
    cy.get('body').then(($body) => {
      if ($body.find('#PolicyConfirmattionButton').length > 0) {
        this.elements.acceptCookiesBtn().click();
      }
    });
  }

  navigateToIndustry(menu, option) {
    this.elements.navMenuItem(menu).trigger('mouseover');
    this.elements.industryOption(option).should('be.visible').click();
  }

  scrollToSection(title) {
    this.elements.sectionTitle(title).scrollIntoView().should('be.visible');
  }

  getCardBackText(cardName) {
    return this.elements.cardFront(cardName)
      .scrollIntoView()
      .trigger('mouseover', { force: true })
      .parents('.flip-card-inner')
      .find('.flip-card-back')
      .invoke('text')
      .then((text) => {
        
        const cleanedText = text.trim();
        cy.log('Captured Text: ' + cleanedText);
        cy.wrap(cleanedText) // IF needed later to use
        .as('capturedBackText')
        .should('not.be.empty'); 
      });
  }

  clickButtonByText(buttonText) {
    this.elements.dynamicButton(buttonText).scrollIntoView().click();
  }
}

export const retirementPage = new RetirementPage();