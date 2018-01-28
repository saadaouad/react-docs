describe('My First Test', function() {
    it('Clicks an element', function() {
      cy.visit('https://example.cypress.io/')

      cy.contains('blur').click()

      cy.url()
        .should('include', '/commands/actions')
    })
  })