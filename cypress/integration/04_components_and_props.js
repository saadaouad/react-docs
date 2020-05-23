describe("Components and props", function() {
  it("visit components and props page", function() {
    cy.visit("/components-and-props");
  });

  it("check components and props content", function() {
    cy.get("[data-cy=title]").contains("Components and Props");
    cy.get("[data-cy=username]").contains("This is, Saad Aouad!");
  });
});
