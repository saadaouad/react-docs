describe("Code splitting", function() {
    it("visit code splitting page", function() {
      cy.visit("/code-splitting");
    });
  
    it("check code-splitting content", function() {
      cy.get("[data-cy=title]").contains("Code Splitting");
      cy.get("[data-cy=lazy-component]").contains("Lazy component");
      cy.get("[data-cy=another-lazy-component]").contains("Another lazy component");
    });
  });
  