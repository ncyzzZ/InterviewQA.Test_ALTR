@ui
Feature: Overall - Full E2E Flow from Login to Order Confirmation

  Scenario: Run complete flow Step 1 to Step 4
      Given I am on the login page
          When I enter email "admin@admin.com" and password "admin123"
              And I click the Submit button
                  Then I should see the Shopping Cart page
                      When I add "Dior J'adore" with quantity 2 to the cart
                          And I add "Gucci Bloom Eau de" with quantity 3 to the cart
                              Then the total cost should be correctly calculated
                                  When I click "PROCEED TO CHECKOUT"
                                      Then I should see the Shipping Details page
                                          When I fill in "phone" with "0812345678"
                                              And I fill in "street" with "123 Main Street"
                                                  And I fill in "city" with "Bangkok"
                                                      And I select country "Thailand"
                                                          And I click "Submit Order"
                                                              Then I should see the Order Confirmation page
                                                                  And the displayed address should be "123 Main Street, Bangkok - Thailand"
