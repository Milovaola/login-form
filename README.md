## Test task for Arival Bank

### The Task

Need to implement a multi-step form using React and TypeScript. The Figma layout is
here https://www.figma.com/file/KsJexV6VyuYDTAzjcXlZ9t/Test-layout?type=design&node-id=0%3A1&t=uFDpaX7hzT9EfdEM-1.

### Requirements

Step 1 should include the following fields:

- username (string, required, 4-12 characters)
- email (any valid email address required)
- phone number (any valid phone number, required)
- country (required, get the list of countries from any API you prefer)

Step 2 should include the following fields:

- password (password, required, 8-16 characters)
- repeat password (password should match the password field)

Step 3 should display values from the fields:

- username
- phone
- country

In Figma we have a basic file structure with two example components: ErrorText and Select.