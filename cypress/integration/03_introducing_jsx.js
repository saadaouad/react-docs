describe("Introducing JSX", function() {
  it("visit introducing JSX page", function() {
    cy.visit("/introducing-jsx");
  });

  it("check introducing JSX content", function() {
    cy.get("[data-cy=title]").contains("Introducing JSX");
    cy.get("[data-cy=content]").contains(
      "Hello, Mohammed Abu muslim!"
    );
  });
});
