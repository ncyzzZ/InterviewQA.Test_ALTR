@ui
Feature: Step4 - Order Confirmation Address Validation

  Scenario: Positive - Address displayed in correct format Street, City - Country
      Given I have submitted an order with street "123 Main Street" city "Bangkok" and country "Thailand"
          Then the displayed address should be "123 Main Street, Bangkok - Thailand"
