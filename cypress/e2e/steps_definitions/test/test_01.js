import {Given, When, And, Then} from 'cypress-cucumber-preprocessor/steps';
const Home = require('../../../pages/Home/home_page');
const Indices = require('../../../pages/Indices/indices');

Given('the user enter to the home page of london stock exchange', () => {
    cy.visit(Cypress.env('LONDON_EXCHANGE_URL'));
});

When('the user click in view FTSE 100 button', () => {
    Home.clickBtnViewFTSE100();
});

Then('the user should be in the url {string}', (url) => {
    Indices.isCorrectRedirrection(url);
});

When('the user click in Code column', () => {
    Indices.clickCodeColumn();
});

And('the user select the {string} option', (option) => {
    Indices.selectCodeColumnOption(option);
});

Then('the user should see the AAF as a first option in code column', () => {
    Indices.isDisplayAZReorder();
});
