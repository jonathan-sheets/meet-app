Feature: Specify Number of Events

  Scenario: When user hasn't specified a number, 24 is the default number
    Given the user hasn't specified a number of events
    When the user opens the app
    Then they should see 24 events total

  Scenario: User can change the number of events they want to see
    Given the user hasn't specified a number of events
    When the user types in a number
    Then that number of events will be shown
