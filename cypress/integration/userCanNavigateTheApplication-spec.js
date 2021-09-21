describe("User can navigate in the application", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it('is expected that application has a header', () => {
    cy.get("[data-cy=header]").should("contain", "Rock, paper, scissor game")
    
  });

  it('is expected that application has 3 total buttons for alternatives rock, paper and scissor', () => {
    cy.get("[data-cy=button1").should("contain", "Rock")
    cy.get("[data-cy=button2]").should("contain", "Paper")
    cy.get("[data-cy=button3]").should("contain", "Scissor")
    
  });
});
