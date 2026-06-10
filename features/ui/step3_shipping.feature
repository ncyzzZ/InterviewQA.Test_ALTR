@ui
Feature: Step3 - Shopping Details Form

  Scenario: Positive - Submit Order with all required fields filled
      Given I am on the Shipping Details page
          When I fill in "phone" with "0812345678"
              And I fill in "street" with "123 Main Street"
                  And I fill in "city" with "Bangkok"
                      And I select country "Thailand"
                          And I click "Submit Order"
                              Then I should see the Order Confirmation page

                                Scenario: Negative - Submit Order with missing phone number
                                    Given I am on the Shipping Details page
                                        When I fill in "street" with "123 Main Street"
                                            And I fill in "city" with "Bangkok"
                                                And I select country "Thailand"
                                                    And I click "Submit Order"
                                                        Then the order should not be submitted

                                                          Scenario: Negative - Submit Order with missing city
                                                              Given I am on the Shipping Details page
                                                                  When I fill in "phone" with "0812345678"
                                                                      And I fill in "street" with "123 Main Street"
                                                                          And I select country "Thailand"
                                                                              And I click "Submit Order"
                                                                                  Then the order should not be submitted
