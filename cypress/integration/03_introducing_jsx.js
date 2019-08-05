describe("Introducing JSX", function() {
  it("visit home page", function() {
    cy.visit("/introducing-jsx");
  });

  it("check introducing jsx content", function() {
    cy.get("[data-cy=introducing-jsx-title]").contains("Introducing JSX");
    cy.get("[data-cy=introducing-jsx-content]").contains(
      "Hello, Mohammed Abu muslim!"
    );
  });
});
