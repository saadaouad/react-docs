describe("Menu links", function() {
  it("visit home page", function() {
    cy.visit("/");
  });

  it("check introducing JSX link", function() {
    cy.get("[data-cy=introducing-jsx]").click();
    cy.url().should("include", "/introducing-jsx");
  });

  it("check components and props link", function() {
    cy.get("[data-cy=components-and-props]").click();
    cy.url().should("include", "/components-and-props");
  });

  it("check state and lifecycle link", function() {
    cy.get("[data-cy=state-and-lifecycle]").click();
    cy.url().should("include", "/state-and-lifecycle");
  });

  it("check handling events link", function() {
    cy.get("[data-cy=handling-events]").click();
    cy.url().should("include", "/handling-events");
  });

  it("check conditional rendering link", function() {
    cy.get("[data-cy=conditional-rendering]").click();
    cy.url().should("include", "/conditional-rendering");
  });

  it("check lists and keys link", function() {
    cy.get("[data-cy=lists-and-keys]").click();
    cy.url().should("include", "/lists-and-keys");
  });

  it("check forms link", function() {
    cy.get("[data-cy=forms]").click();
    cy.url().should("include", "/forms");
  });

  it("check lifting state up link", function() {
    cy.get("[data-cy=lifting-state-up]").click();
    cy.url().should("include", "/lifting-state-up");
  });

  it("check composition vs inheritance link", function() {
    cy.get("[data-cy=composition-vs-inheritance]").click();
    cy.url().should("include", "/composition-vs-inheritance");
  });

  it("check thinking in react link", function() {
    cy.get("[data-cy=thinking-in-react]").click();
    cy.url().should("include", "/thinking-in-react");
  });

  it("check code splitting link", function() {
    cy.get("[data-cy=code-splitting]").click();
    cy.url().should("include", "/code-splitting");
  });
});
