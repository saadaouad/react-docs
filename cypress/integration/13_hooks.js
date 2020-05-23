/* eslint-disable no-undef */
describe("Hooks", function() {
  it("visit hooks page", function() {
    cy.visit("/hooks");
  });

  it("find title", function() {
    cy.get("[data-cy=title]").contains("Hooks");
  });

  it("check state hook", function() {
    cy.get("[data-cy=state-hook]").click();
    cy.url().should("include", "/hooks/state-hook");
    cy.get("[data-cy=title]").contains("State Hook");
    cy.get("[data-cy=count]").contains("You clicked 0 times");
    cy.get("[data-cy=increment-count]").click();
    cy.get("[data-cy=count]").contains("You clicked 1 times");
  });

  it("check state hook", function() {
    cy.visit("/hooks");
    cy.get("[data-cy=effect-hook]").click();
    cy.url().should("include", "/hooks/effect-hook");
    cy.get("[data-cy=title]").contains("Effect Hook");
    cy.get("[data-cy=count]").contains("You clicked 0 times");
    cy.get("[data-cy=increment-count]").click();
    cy.get("[data-cy=count]").contains("You clicked 1 times");
  });
});
