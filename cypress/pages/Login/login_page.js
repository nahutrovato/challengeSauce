class Login {

    elements = {
        inputUsername: () => cy.get('input#user-name'),
        inputPassword: () => cy.get('input#password'),
        loginButton: () => cy.get('input#login-button'),
    };

    enterUsername(username){
        this.elements.inputUsername().type(username);
    };

    enterPassword(password){
        this.elements.inputPassword().type(password);
    };

    clickLoginButton(){
        this.elements.loginButton().click();
    };

};
module.exports = new Login();