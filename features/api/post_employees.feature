Feature: API - POST /api/v1/employees

  Scenario: Positive - Create employee with valid data returns 201
      Given the API base URL is "http://localhost:8887"
          When I send a POST request to "/api/v1/employees" with valid employee data
              Then the response status code should be 201

                Scenario: Negative - Create employee with invalid email returns 400
                    Given the API base URL is "http://localhost:8887"
                        When I send a POST request to "/api/v1/employees" with invalid email "not-an-email"
                            Then the response status code should be 400
                                And the response should contain defaultMessage "must be a well-formed email address"
