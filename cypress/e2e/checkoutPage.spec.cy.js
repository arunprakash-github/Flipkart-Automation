require('cypress-xpath')

describe('Checkout Page',()=>{

    it('test spec',()=>{
        cy.visit(`https://www.flipkart.com/`)

    cy.url().then(url=>{
        cy.log(url)
    })
        // cy.log('checkout page spec')
    })
})