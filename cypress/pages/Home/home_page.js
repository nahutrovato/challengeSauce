class Home {

    elements = {
        burgerMenuButton: () => cy.get('button#react-burger-menu-btn'),
    };

    isDisplayedElement(element){
        this.elements[element]().should('be.visible');
    };

};
module.exports = new Home();