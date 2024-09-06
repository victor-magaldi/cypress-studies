describe('task management', () => {
  it('should open and close task modal', () => {
    cy.visit('http://localhost:5173')

    cy.get('button').contains('Add Task').click()
    cy.get('.modal').should('exist')
    cy.get('.backdrop').click({ force: true })   // force true um clique mesmo que exista algo acima do elemento que quer clicar ex: um overlay
    cy.get('.backdrop').should('not.exist')
    cy.get('.modal').should('not.exist')

    cy.get('button').contains('Add Task').click()
    cy.get('.modal').should('exist')
    cy.get('.modal').contains('Cancel').click()
    cy.get('.backdrop').should('not.exist')
    cy.get('.modal').should('not.exist')
  })

})