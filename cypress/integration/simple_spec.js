describe('My First Test', function() {
    it('Finds an element', function() {
      cy.visit('https://example.cypress.io/')
      cy.contains('blur')
    })
  })