class Cart {

    elements = {
        inventoryNameProduct: () => cy.get('[data-test="inventory-item"]'),
        checkoutButton: () => cy.get('button#checkout'),  	
        firstNameInput: () => cy.get(`input#first-name`),
        lastNameInput: () => cy.get('input#last-name'),
        postalCodeInput: () =>  cy.get('input#postal-code'),
        continueButton: () => cy.get('input#continue'),
        finishButton: () => cy.get('button#finish'),
        completeHeader: () => cy.get('h2[data-test="complete-header"]'),
    };

    successfullAddProductToCart(product){
        this.elements.inventoryNameProduct()
            .should('be.visible')
            .then(($element) => {
                expect($element.text()).to.contain(product);
            });
    };

    clickCheckoutButton(){
        this.elements.checkoutButton().click();
    };

    enterPersonalData(data,input){
        this.elements[input]().type(data);
    };

    clickContinueButton(){
        this.elements.continueButton().click();
    };

    clickFinishButton(){
        this.elements.finishButton().click();
    };

    isDisplayedSuccessfulPurchase(successfulPurchaseText){
        this.elements.completeHeader().should('contain', successfulPurchaseText);
    };
};
module.exports = new Cart();
