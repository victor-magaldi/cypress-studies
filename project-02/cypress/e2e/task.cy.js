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

  it('should create a new task', () => {
    const name = 'New Task'
    const description = 'New Task'

    cy.visit('http://localhost:5173')
    cy.get('button').contains('Add Task').click()
    cy.get('#title').type(name)
    cy.get('#summary').type(description)
    cy.get('.modal').contains('Add Task').click()
    cy.get('.backdrop').should('not.exist')
    cy.get('.modal').should('not.exist')
    cy.get('.task').should('have.length', 1)
    cy.get('.task h2').contains(name)
    cy.get('.task p').contains(description)

  })

  it('should validate user input', () => {
    cy.visit('http://localhost:5173')
    cy.get('button').contains('Add Task').click()
    cy.get('.modal').contains('Add Task').click()
    cy.get('.modal').contains('Add Task').click()
    cy.get('.modal').contains('Please provide values for task title')
  })

})