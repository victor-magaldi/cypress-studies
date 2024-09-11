describe('page navigation', () => {
  it('should navigatite between pages', () => {
    cy.visit('/');
    cy.get('[data-cy="header-about-link"]').click(); // this selector is one pattern
    cy.location('pathname').should('eq', '/about');
    cy.go('back');
    cy.location('pathname').should('eq', '/');
    cy.get('[data-cy="header-about-link"]').click();
    cy.get('[data-cy="header-home-link"]').click();
    cy.location('pathname').should('eq', '/');
  });
});
