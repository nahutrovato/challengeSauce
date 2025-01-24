import { Given, Then } from 'cypress-cucumber-preprocessor/steps';
let response;

Given('I make a GET request to the URL {string}', (url) => {
  cy.request(Cypress.env('API_URL')+url).then((res) => {
    response = res;
  });
});

Then('the response should have a status code of {int}', (statusCode) => {
  expect(response.status).to.eq(statusCode);
});

Then('the response body should contain the following user:', (dataTable) => {
  const data = dataTable.rowsHash();

  expect(response.body.data.id).to.eq(Number(data.id));
  expect(response.body.data.email).to.eq(data.email);
  expect(response.body.data.first_name).to.eq(data.first_name);
  expect(response.body.data.last_name).to.eq(data.last_name);
  expect(response.body.data.avatar).to.eq(data.avatar);
});