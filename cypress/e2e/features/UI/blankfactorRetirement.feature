Feature: Retirement and Wealth Section Validation

  @UI @Retirement
  Scenario: Capture AI & Machine Learning card details and navigation to contact page
    Given I navigate to the Blankfactor home page
    And I accept the cookie policy if displayed
    When I access the "Retirement and wealth" section under the "Industries" menu
    And I go to the "Powering innovation in retirement services" section
    And I capture the detailed information for the "AI & Machine learning" card
    And I proceed to the contact page via "Let's get started"
    Then I should be redirected to the contact page
    And the page title should be captured and displayed