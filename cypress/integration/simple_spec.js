describe('My First Test', function() {
    it('Clicks an element', function() {
      cy.visit('https://example.cypress.io/')

      cy.contains('blur').click()

      cy.url()
        .should('include', '/commands/actions')

      cy.get('.action-email')
        .type('fake@email.com')
        .should('have.value', 'fake@email.com')
    })
  })