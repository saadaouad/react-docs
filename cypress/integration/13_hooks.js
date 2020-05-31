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

  it("check effect hook", function() {
    cy.visit("/hooks");
    cy.get("[data-cy=effect-hook]").click();
    cy.url().should("include", "/hooks/effect-hook");
    cy.get("[data-cy=title]").contains("Effect Hook");
    cy.get("[data-cy=count]").contains("You clicked 0 times");
    cy.get("[data-cy=increment-count]").click();
    cy.get("[data-cy=count]").contains("You clicked 1 times");
  });

  it("check custom hook", function() {
    cy.visit("/hooks");
    cy.get("[data-cy=custom-hook]").click();
    cy.url().should("include", "/hooks/custom-hook");
    cy.get("[data-cy=title]").contains("Custom Hook");
    cy.get('[data-cy="location"]').clear();
    cy.get('[data-cy="location"]').type("Berlin, DE");
    cy.get('[data-cy="use-dropdown-animal"]').select("bird");
    cy.wait(500);
    cy.get('[data-cy="use-dropdown-breed"]').select("Amazon");
  });
});
