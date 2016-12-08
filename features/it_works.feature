Feature: Checking to see if it works

  In order to see if its all working
  as Oscar
  I want to run a cuke and watch it pass


  Scenario: The app works Message
    When Challenges are loaded
    Then I should see the "app works!" message
