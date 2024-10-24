describe('E-commerce Flow Test', () => {
    it('should complete purchase flow with Broccoli', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').should('be.visible');
        cy.get('.search-keyword').type('Brocolli').should('have.value', 'Brocolli');
        cy.wait(1000);
        cy.get('.quantity').should('have.value', '1');
        cy.get('.increment').then($btn => {
            cy.wrap($btn).click();
            cy.wrap($btn).click();
        });
        cy.get('.product-action > button').should('be.visible').and('contain', 'ADD TO CART').as('addToCartButton').click();
        cy.get('.product-action > button', {timeout: 10000}).should('contain', 'ADDED');
        cy.get('.cart-info').should('be.visible');
        cy.get('[alt="Cart"]').should('be.visible').click();
        cy.get('button').contains('PROCEED TO CHECKOUT').click();
        cy.get('.product-name').contains('Brocolli').should('be.visible');
        cy.get('.promocode').type('test');
        cy.get('.promoBtn').click();
        cy.wait(1000);
        cy.get('.promoInfo').contains('Invalid code ..!').should('be.visible');
        cy.get('#root > div > div > div > div > button').click();
        cy.get('#root > div > div > div > div > div > select > option:nth-child(1)').click({force: true});
        cy.get('#root > div > div > div > div > input').check();
        cy.get('#root > div > div > div > div > button').click();
        cy.get('body > script:nth-child(2)').wait(5000).should('exist');
    });
});
