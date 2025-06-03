class Home {
    
    elements = {
        btnViewFTSE100: () => cy.get('#idBtnViewFTSE100'),
    };

    clickBtnViewFTSE100(){
        this.elements.btnViewFTSE100().click();
    };

    
};
module.exports = new Home();