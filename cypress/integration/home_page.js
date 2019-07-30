describe("Home page", function() {
  it("visit home page", function() {
    cy.visit("/");
  });

  it("check home page redirection", function() {
    cy.get("[data-cy=header-title]").click({ force: true });
    cy.url().should("include", "/");
  });

  it("check main component content", function() {
    cy.get("[data-cy=main-component]").contains(
      "This is an implementation of all React official docs sections using CRA"
    );
    cy.get("[data-cy=react-docs").click();
    cy.get("[data-cy=create-react-app]").click();
  });

  it("check footer content", function() {
    cy.get("[data-cy=footer]").contains("Happy hacking!");
  });
});
