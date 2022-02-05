Feature: Specify number of events

Scenario: When user hasn’t specified a number, 32 is the default number
Given the user is on the app home page
When the user does not specify certain number of events
Then  the initial number of events will be thirty-two

Scenario: User can change the number of events they want to see
Given the user is on the app home page
When the user puts a specific number of events they are interested to see
Then that specified number will be shown