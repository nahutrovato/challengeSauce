import {Given, Then} from 'cypress-cucumber-preprocessor/steps';
let response; 

Given('I send a POST request to {string} with the following body:', (url, body) => {
  cy.request('POST', Cypress.env('API_URL')+url, JSON.parse(body)).then((res) => {
    response = res; 
  });
});

Then('the response status should be {int}', (statusCode) => {
  expect(response.status).to.eq(statusCode);
});

Then('the response should contain the following user details:', (dataTable) => {
    const expectedData = dataTable.hashes(); 
    const actualData = response.body; 
  
    expectedData.forEach((row) => {
      const key = row.key; 
      const value = row.value; 
      expect(actualData).to.have.property(key); 
      expect(actualData[key].toString()).to.eq(value); 
    });
});