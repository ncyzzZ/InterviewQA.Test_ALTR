@ui
Feature: Step2 - Add Items to Cart

  Scenario: Positive - Select correct items and validate total cost then proceed to checkout
      Given I am logged in to the shop
          When I add "Dior J'adore" with quantity 2 to the cart
              And I add "Gucci Bloom Eau de" with quantity 3 to the cart
                  Then the cart should contain "Dior J'adore" with quantity 2
                      And the cart should contain "Gucci Bloom Eau de" with quantity 3
                          And the total cost should be correctly calculated
                              When I click "PROCEED TO CHECKOUT"
                                  Then I should see the Shipping Details page
