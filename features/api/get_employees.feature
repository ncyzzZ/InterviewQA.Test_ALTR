Feature: API - GET /api/v1/employees/{id}

  Scenario: Positive - Get employee with existing ID returns 200
      Given the API base URL is "http://localhost:8887"
          When I send a POST request to "/api/v1/employees" with valid employee data
              And I save the returned employee ID
                  When I send a GET request to "/api/v1/employees/{id}" with the saved ID
                      Then the response status code should be 200

                        Scenario: Negative - Get employee with non-existing ID returns 404
                            Given the API base URL is "http://localhost:8887"
                                When I send a GET request to "/api/v1/employees/{id}" with id 999999
                                    Then the response status code should be 404
                                        And the response body message should be "Employee not found with ID 999999"
