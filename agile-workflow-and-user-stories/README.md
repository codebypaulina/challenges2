# Finance app that tracks individual expenses

## User Stories

### User Story 1: Add expense

#### Value proposition

As an <user>
I want to <add a new expense>
So that <I can manage my finances easily & keep them organized>

#### Description

- The user should be able to add a new expense through a form that asks for the amount, category, & date
- The form should be simple & easy to use

#### Acceptance criteria

- The amount, category, & date fields are required
- If the amount / date is empty, show an error message "XXXXXXXXX"
- If no category is selected, set a default category "Miscellaneous"
  & show a message "Expense added successfully to _Miscellaneous_"
- After the expense is added, show a message "Expense added successfully"

#### Tasks

- Create a form to add expenses (fields for amount, category, and date)
- Add validation to the form fields
- Add the logic to save the expense to the database
- Show a confirmation message when the expense is added

...............................................................................................................................

## INVEST Criteria

# Independent

This user story is independent of other features.
Adding an expense does not affect other parts of the app & can be built & tested separately

# Negotiable

The way the form and validations are implemented can be flexible
E.g.: the team can change the form design or how validations work as long as the main feature (adding an expense) stays the same

# Valuable

The user gets immediate value by being able to track their expenses
This helps them stay informed about their finances & make better decisions

# Estimable

The effort to implement this feature is easy to estimate
Creating the form, adding validations, & connecting it to the database are achievable within one sprint

# Small

The user story is small & focuses on adding one feature: tracking expenses
It is a manageable task that won't take multiple sprints

# Testable

The goal of this user story can be tested
Tests will check that expenses are added successfully, validations work, & confirmation messages appear when done
