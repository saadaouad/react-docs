describe("Conditional rendering", function() {
  it("visit conditional rendering page", function() {
    cy.visit("/conditional-rendering");
  });

  it("check conditional rendering content", function() {
    cy.get("[data-cy=title]").contains("Conditional rendering");
    cy.get("[data-cy=sub-title]").contains("Please sign up.");
    cy.get("[data-cy=button]").contains("Login");
    cy.get("[data-cy=button]").click();
    cy.get("[data-cy=sub-title]").contains("Welcome back!");
    cy.get("[data-cy=button]").contains("Logout");
  });
});
