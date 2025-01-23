class Home {
    
    elements = {
        burgerMenuButton: () => cy.get('button#react-burger-menu-btn'),
        addToCartButton: (product) => cy.get(`button[data-test="add-to-cart-${product}"]`),
        shoppingCartButton: () => cy.get('a[data-test="shopping-cart-link"]'),
    };

    isDisplayedElement(element){
        this.elements[element]().should('be.visible');
    };

    addToCartProduct(product){
        this.elements.addToCartButton(product).click();
    };

    enterToShoppingCart(){
        this.elements.shoppingCartButton().click();
    };

};
module.exports = new Home();