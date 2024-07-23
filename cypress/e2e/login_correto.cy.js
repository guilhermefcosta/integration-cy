describe('Página de login', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app');
    cy.get('[data-test="login-button"]').click();
  });
  

  it('Fazer o login corretamente', () => {
    cy.login('guilherme.ferreira4@email.com', 'Senha123');
  })

})