describe("Lists and keys", function() {
  it("visit lists and keys page", function() {
    cy.visit("/lists-and-keys");
  });

  it("check lists and keys content", function() {
    cy.get("[data-cy=title]").contains("Lists and keys");
    cy.get("[data-cy=list-items]").should("have.length", 5);
  });
});
