/* eslint-disable no-undef */
describe("Portals", function() {
  it("visit portals page", function() {
    cy.visit("/portals");
  });

  it("find title", function() {
    cy.get("[data-cy=title]").contains("Portals");
  });

  it("Toggle modal", function() {
    cy.get("[data-cy=show-modal]").click();
    cy.get("[data-cy=modal-title]").contains(
      "Would you like to reach me on Github?"
    );
    cy.get("[data-cy=hide-modal]").click();
  });
});
