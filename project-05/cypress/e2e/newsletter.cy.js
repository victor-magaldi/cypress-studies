describe('Newsletter', () => {
  beforeEach(() => {
    cy.task('seedDatabase');
  });

  it('should display a success message', () => {
    cy.intercept('POST', '/newsletter*', {
      statusCode: 201,
      body: { status: 201 },
    }).as('subscribe'); // dummy response
    cy.visit('/');
    cy.get('[data-cy="newsletter-email"]').type('test@example.com');
    cy.get('[data-cy="newsletter-submit"]').click();
    cy.wait('@subscribe'); // await intercept with dummy data
    cy.contains('Thanks for signing up!');
  });
});
