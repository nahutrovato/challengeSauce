Feature: FTSE 100 - Reorder the code column

    Scenario Outline: TSE 100 - Reorder the code column
        Given the user enter to the home page of london stock exchange
        When the user click in view FTSE 100 button
        Then the user should be in the url '/indices/ftse-100/constituents/table'
        When the user click in Code column
        And the user select the 'A-Z' option
        Then the user should see the 'AAF' as a first option in code column
    Examples:
    ||
    ||