import {Given, When, And, Then} from 'cypress-cucumber-preprocessor/steps';

Given('el usuario ingresa a la pagina del portal de asegurados en ambiente', () => {
    cy.visit(Cypress.env('BASE_URL'))
});

When('ingresa las credenciales correctas en nombre de usuario', () => {
    cy.log('test')
});