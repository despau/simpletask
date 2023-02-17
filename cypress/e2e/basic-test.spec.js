/// <reference types="Cypress" />

describe('Authentication Test Suite', () => {
    

    beforeEach( ()=>{
        cy.visit('http://localhost:3000/')
    } )

    it('Login in the Application', () => {

        //find the user textfield
        cy.get('[name=username]').type("kfgfvkkxedvosxyioa@tcwlx.co")
        cy.get('[name=password]').type("kfgfvkkxedvosxyioa@tcwlx.co")

        //Find the sign in Button
       cy.get('[type=submit').click()

       cy.get('.welcome').contains(`Welcome to your TASKS`)
        
       cy.get('form').find('[name=task-input]').type('this is is a test task from cypress')
       cy.get('[type=submit').click()

       

       cy.get('[data-test=task-list]').find('> li').contains('this is is a test task from cypress')
    })

    

})