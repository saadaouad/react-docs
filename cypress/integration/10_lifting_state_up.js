describe("Lifting state up", function() {
  it("visit lifting state up page", function() {
    cy.visit("/lifting-state-up");
  });

  it("Check temperature in Fahrenheit", function() {
    const scaleInCelsius = 30;
    const scaleInFahrenheit = "86";
    cy.get("[data-cy=celsius-legend]").contains(
      "Enter temperature in Celsius:"
    );
    cy.get("[data-cy=celsius-input]").type(scaleInCelsius);
    cy.get("[data-cy=fahrenheit-legend]").contains(
      "Enter temperature in Fahrenheit:"
    );
    cy.get("[data-cy=fahrenheit-input]").should(
      "have.value",
      scaleInFahrenheit
    );
    cy.get("[data-cy=boiling-verdict]").contains("The water would not boil.");

    cy.get("[data-cy=fahrenheit-input]").clear();
  });

  it("Check temperature in Celsius", function() {
    const scaleInCelsius = "110";
    const scaleInFahrenheit = 230;
    cy.get("[data-cy=fahrenheit-legend]").contains(
      "Enter temperature in Fahrenheit:"
    );
    cy.get("[data-cy=fahrenheit-input]").type(scaleInFahrenheit);
    
    cy.get("[data-cy=celsius-legend]").contains(
      "Enter temperature in Celsius:"
    );
    cy.get("[data-cy=celsius-input]").should(
      "have.value",
      scaleInCelsius
    );
    cy.get("[data-cy=boiling-verdict]").contains("The water would boil.");
  });
});
