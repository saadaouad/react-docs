describe("Handling events", function() {
  it("visit handling events page", function() {
    cy.visit("/handling-events");
  });

  it("check handling events content", function() {
    cy.get("[data-cy=title]").contains("Handling events");
    cy.get("[data-cy=button]").contains("Click here");
    cy.get("[data-cy=button]").click();
    cy.get("[data-cy=button]").contains("Thanks!");
  });
});
