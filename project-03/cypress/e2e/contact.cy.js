describe('contact form', () => {
  beforeEach(() => {
    cy.visit('/about');
  });
  it('should submit form', () => {
    cy.task('seedDatabase', 'fileName.csv').then((value) => {
      //use Value
    });
    cy.getByIdCy('contact-input-message').type('Hello, this is my message'); // this is Custom query in suppport/commands.js
    cy.getByIdCy('contact-input-name').type('John Doe');
    cy.get('[data-cy="contact-input-email"]').type('test@example.com');

    // const submitBtn = cy.get('[data-cy="contact-btn-submit"]'); // não recomendado, pois não é retornado o btn
    // o Cypress considera a variável como uma repetição de teste e não é uma variável
    // para funciona precisará usar alias

    cy.get('[data-cy="contact-btn-submit"]').as('submitBtn');
    cy.get('@submitBtn')
      .contains('Send Message')
      .and('not.have.attr', 'disabled'); // or should, 'and' improve readability

    cy.submitFormContact(); // this command is custom in suppport/commands.js
    // cy.get('@submitBtn').click();
    cy.get('@submitBtn').contains('Sending...').should('have.attr', 'disabled'); // or .and('be.disabled')
    cy.wait(1000);
    cy.get('@submitBtn').contains('Send Message');
  });

  it('should validate the form input', () => {
    cy.get('[data-cy="contact-btn-submit"]').as('submitBtn');
    cy.get('@submitBtn')
      .click()
      .then((el) => {
        expect(el).to.not.have.attr('disabled');
        expect(el.text()).to.not.eq('Sending...');
      });

    cy.get('@submitBtn').contains('Send Message');

    cy.get('[data-cy="contact-input-message"]').as('messageInput');
    cy.get('@messageInput').blur();
    cy.get('@messageInput')
      .parent()
      .should('exist')
      .should((el) => {
        expect(el.attr('class')).to.contains('invalid');
      });
    cy.get('[data-cy="contact-input-name"]').as('msgInput');
    cy.get('@msgInput').focus().blur(); // forçar o novo focus para depois realizar o blur
    cy.get('@msgInput')
      .parent()
      .should((el) => {
        expect(el.attr('class')).to.contains('invalid');
      });
    cy.screenshot();
    cy.get('[data-cy="contact-input-email"]').as('emailInput');
    cy.get('@emailInput').focus().blur();
    cy.get('@emailInput')
      .parent()
      .should((el) => {
        expect(el.attr('class')).to.contains('invalid');
      });
  });
});
