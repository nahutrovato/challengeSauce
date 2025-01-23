import {Given, When, And, Then} from 'cypress-cucumber-preprocessor/steps';
const Login = require('../../../pages/Login/login_page');
const Home = require('../../../pages/Home/home_page');

Given('the user logs into the Saucedemo website', () => {
    cy.visit(Cypress.env('BASE_URL'));
});

When('the user enters a username {string}', (username) => {
    Login.enterUsername(Cypress.env(username));
});

And('the user enters the password {string}', (password) => {
    Login.enterPassword(Cypress.env(password));
});

And('the user clicks the login button', () => {
    Login.clickLoginButton();
});

Then('the user correctly verifies the successful login by viewing the hamburger menu {string}', (element) => {
    Home.isDisplayedElement(element);
});

