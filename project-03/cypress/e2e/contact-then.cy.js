describe('contact form', () => {
  it('should submit form', () => {
    cy.visit('http://localhost:5173/about');

    cy.get('[data-cy="contact-input-message"]').type(
      'Hello, this is my message'
    );
    cy.get('[data-cy="contact-input-name"]').type('John Doe');
    cy.get('[data-cy="contact-input-email"]').type('test@example.com');

    cy.get('[data-cy="contact-btn-submit"]').as('submitBtn');

    cy.get('@submitBtn').then(($submitBtn) => {
      // then consegue recupera o estado após a ação anterior
      expect($submitBtn).to.contain('Send Message'); // é necessário usar expect dentro do Then, um função global
      expect($submitBtn).to.not.have.attr('disabled');

      cy.wrap($submitBtn).click();

      cy.get('@submitBtn').then(($updatedSubmitBtn) => {
        expect($updatedSubmitBtn).to.contain('Sending...');
        expect($updatedSubmitBtn).to.have.attr('disabled');
      });

      cy.get('@submitBtn').then(($finalSubmitBtn) => {
        expect($finalSubmitBtn).to.contain('Send Message');
        expect($finalSubmitBtn).to.not.have.attr('disabled');
      });
    });
  });
});
