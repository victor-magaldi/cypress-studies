describe('tasks page', () => {
  it('should render the main image', () => {
    cy.visit('http://localhost:5173')
    cy.get('.main-header').find('img')   // não pode usar o get encadeado e find só se usa encadead
    // cy.get('.main-header img')    // => também funcionaria
  })
  it('should display the page title', () => {
    cy.visit('http://localhost:5173')
    cy.get('.main-header h1').should("have.length", 1)
    cy.get('.main-header h1').contains('My Cypress Course Tasks')
  })
})