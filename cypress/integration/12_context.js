describe("Context", function() {
  it("visit context page", function() {
    cy.visit("/context");
  });

  it("find title", function() {
    cy.get("[data-cy=title]").contains("Context");
  });

  it("check context default content", function() {
    cy.get("[data-cy=context-button]").contains("Toggle theme");
    cy.get("[data-cy=context-button]").should(
      "have.css",
      "background-color",
      "rgb(238, 238, 238)"
    );
  });

  it("check context toggle content", function() {
    cy.get("[data-cy=context-button]").click();
    cy.get("[data-cy=context-button]").contains("Revert theme");
    cy.get("[data-cy=context-button]").should(
      "have.css",
      "background-color",
      "rgb(34, 34, 34)"
    );
  });
});
