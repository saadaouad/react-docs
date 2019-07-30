describe("The home page", function() {
  it("The home page", function() {
    cy.visit("/");
    cy.get("[data-cy=header-title]").click();
  });
});
