Feature: Get user details

  Scenario: Get details of user with ID 2
    Given I make a GET request to the URL "/api/users/2"
    Then the response should have a status code of 200
    And the response body should contain the following user:
      | key           | value                          |
      | id            | 2                              |
      | email         | janet.weaver@reqres.in         |
      | first_name    | Janet                          |
      | last_name     | Weaver                         |
      | avatar        | https://reqres.in/img/faces/2-image.jpg |