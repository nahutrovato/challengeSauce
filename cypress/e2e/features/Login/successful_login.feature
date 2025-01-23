Feature: Successful login

    Scenario Outline: Successful login with correct username and password
    Given the user logs into the Saucedemo website 
    When the user enters a username '<username>'
    And the user enters the password '<password>'
    And the user clicks the login button
    Then the user correctly verifies the successful login by viewing the hamburger menu '<element>'
    Examples:
    | username         | password         | element          |
    | USERNAME_CORRECT | PASSWORD_CORRECT | burgerMenuButton |