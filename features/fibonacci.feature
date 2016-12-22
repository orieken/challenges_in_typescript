Feature: Display Fibonacci Number

  In order to know what the Fibonacci for a specific index
  as a challenges player
  I want to be able to submit an index and have the Fibonacci number returns to me

  Scenario: Submit One
    When I submit 1 to the Fibonacci
    Then Fibonacci should show 1

  Scenario: Submit Two
    When I submit 2 to the Fibonacci
    Then Fibonacci should show 1

  Scenario: Submit Three
    When I submit 3 to the Fibonacci
    Then Fibonacci should show 2
