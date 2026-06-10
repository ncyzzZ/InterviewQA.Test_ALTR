@ui
Feature: Step1 - Login to Shop

  Scenario: Positive - Login with valid credentials
      Given I am on the login page
          When I enter email "admin@admin.com" and password "admin123"
              And I click the Submit button
                  Then I should see the Shopping Cart page

                    Scenario: Negative - Login with wrong email
                        Given I am on the login page
                            When I enter email "wrong@email.com" and password "admin123"
                                And I click the Submit button
                                    Then I should remain on the login page

                                      Scenario: Negative - Login with wrong password
                                          Given I am on the login page
                                              When I enter email "admin@admin.com" and password "wrongpass"
                                                  And I click the Submit button
                                                      Then I should remain on the login page

                                                        Scenario: Negative - Login with empty fields
                                                            Given I am on the login page
                                                                When I enter email "" and password ""
                                                                    And I click the Submit button
                                                                        Then I should remain on the login page
