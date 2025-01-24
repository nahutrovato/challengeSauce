Feature: Create a new user via API

  Scenario: Create a user and validate the response
    Given I send a POST request to "/api/users" with the following body:
      """
      {
        "name": "morpheus",
        "job": "leader"
      }
      """
    Then the response status should be 201
    And the response should contain the following user details:
      | key  | value    |
      | name | morpheus |
      | job  | leader   |