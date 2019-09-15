describe("Forms", function() {
  it("visit forms page", function() {
    cy.visit("/forms");
  });

  it("check lists and keys content", function() {
    const email = "aouadsaad05@gmail.com";
    const password = "12345678";
    cy.get("[data-cy=forms]").contains("Forms");
    cy.get("[data-cy=email]").type(email);
    cy.get("[data-cy=password]").type(password);
    cy.get("[data-cy=form]").submit();
  });
});
