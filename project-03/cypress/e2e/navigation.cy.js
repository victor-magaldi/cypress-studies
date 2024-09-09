describe('page navigation', () => {
  it('should navigatite between pages', () => {
    cy.visit('http://localhost:5173');
    cy.get('[data-cy="header-about-link"]').click(); // this selector is one pattern
    cy.location('pathname').should('eq', '/about');
    cy.go('back');
    cy.cy.location('pathname').should('eq', '/');
    cy.get('[data-cy="header-about-link"]').click();
    cy.get('[data-cy="header-home-link"]').click();
    cy.location('pathname').should('eq', '/');
  });
});
