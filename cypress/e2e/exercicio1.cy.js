describe('Primeiro exercício', () => { 
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app');
    });


    it('Verificar titulo da pagina', () => {
        cy.title().should('eq', 'AdoPet')
    });

    it('Verifica texto: Quem ama adota!', () => {
        cy.contains('Quem ama adota!').should('be.visible');
    });

    it('Verificar texto 2', () => { 
        cy.contains('Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible');
    });

    it('Testando login por fluxo alternativo', () => {
        cy.get('.header__message').click();

        cy.get('[data-test="input-loginEmail"]').type('guilherme.ferreira4@email.com');
        cy.get('[data-test="input-loginPassword"]').type('Senha123');

        cy.get('[data-test="submit-button"]').click();
    });

})