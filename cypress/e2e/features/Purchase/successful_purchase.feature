Feature: Successful Purchase

    Scenario Outline: Successful product purchase 
    Given the user logs into the Saucedemo website 
    When the user enters a username '<username>'
    And the user enters the password '<password>'
    And the user clicks the login button
    Then the user correctly verifies the successful login by viewing the hamburger menu '<element>'
    When the user clicks the Add to Cart button for the product 'sauce-labs-backpack'
    And the user clicks the cart button
    Then the user can see the product previously added 'Sauce Labs Backpack'
    When the user clicks the checkout button
    And the user enter the first name '<firstName>' in 'firstNameInput' input
    And the user enter the first name '<lastName>' in 'lastNameInput' input
    And the user enter the first name '<postalCode>' in 'postalCodeInput' input
    When the user clicks the continue button
    Then the user can see the product previously added 'Sauce Labs Backpack'
    And the user click the finish button
    Then the user should see the 'Thank you for your order!' text
    Examples:
    | username         | password         | element          | firstName | lastName   | postalCode |
    | USERNAME_CORRECT | PASSWORD_CORRECT | burgerMenuButton | Test      | Automation | 12345      |