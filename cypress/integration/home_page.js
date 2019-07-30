describe("The home page", function() {
  it("Successfully loads", function() {
    cy.visit("/");
  });
  it("Home redirection", function() {
    cy.get("[data-cy=header-title]").click();
  });
});
