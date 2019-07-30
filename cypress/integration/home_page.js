describe("The home page", function() {
  it("The home page", function() {
    cy.visit("/");
  });
  it("Home page redirection", function() {
    cy.get("[data-cy=header-title]").click({force: true});
  });
});
