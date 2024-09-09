describe('contact form', () => {
  it('should submit form', () => {
    cy.visit('http://localhost:5173/about');
    cy.get('[data-cy="contact-input-message"]').type(
      'Hello, this is my message'
    );
    cy.get('[data-cy="contact-input-name"]').type('John Doe');
    cy.get('[data-cy="contact-input-email"]').type('test@example.com');

    // const submitBtn = cy.get('[data-cy="contact-btn-submit"]'); // não recomendado, pois não é retornado o btn
    // o Cypress considera a variável como uma repetição de teste e não é uma variável
    // para funciona precisará usar alias

    cy.get('[data-cy="contact-btn-submit"]').as('submitBtn');
    cy.get('@submitBtn')
      .contains('Send Message')
      .and('not.have.attr', 'disabled'); // or should, 'and' improve readability
    cy.get('@submitBtn').click();
    cy.get('@submitBtn').contains('Sending...').should('have.attr', 'disabled'); // or .and('be.disabled')

    cy.wait(1000);
    cy.get('@submitBtn').contains('Send Message');
  });
});
