class Indices {

    elements = {
        codeColumn: () => cy.get('.code active-head'),
        codeColumnOption: (option) => cy.get('.sort-option active-sort').contains(option),
        firstCode: () => cy.get('.clickable bold-font-weight instrument-tidm gtm-trackable td-with-link'),
    };

    isCorrectRedirrection(url){
        cy.url(Cypress.env('LONDON_EXCHANGE_URL') + url).should('be.visible');
    };

    clickCodeColumn(){
        this.elements.codeColumn().click();
    };

    selectCodeColumnOption(option){
        this.elements.codeColumnOption(option).click();
    };

    isDisplayAZReorder(){
        this.elements.firstCode().first().contains('AAF');
    };
    
};
module.exports = new Indices();