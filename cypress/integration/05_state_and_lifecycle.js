describe("State and lifecycle", function() {
  it("visit state and lifecycle page", function() {
    cy.visit("/state-and-lifecycle");
  });

  it("check state and lifecycle content", function() {
    cy.get("[data-cy=title]").contains("State and Lifecycle");
    cy.get("[data-cy=date-state]");
  });
});
