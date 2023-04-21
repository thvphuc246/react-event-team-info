# Documentation

The application is a web-based tool that allows users to browse and apply to join teams participating in a challenge. It includes features such as team filtering and member contact information.

## Features

The application has the following features:

- User can scroll through all the teams
- Each team displays the following data:
  - Title
  - Challenge hashtags (link to challenge)
  - Description of the team
  - Idea for a project in one sentence
  - Roles the team is looking for
- Each team has a "show more" button that, when clicked, displays the following:
  - Team members
  - Contact information
  - Apply button where user can send an application for that team
- User can filter teams based on:
  - Roles they are looking for
  - Challenge title
- By applying, the team in question can see the application letter, as well as the user profile CV (created in event registration)

## Technologies Used

The following technologies were used in building the application:

- React
- Tailwind
- NodeJS
- Husky
- Jest
- React Modal

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository.
2. Install the necessary dependencies using `yarn install`.
3. Start the development server using `yarn start`.

## Git Hooks

The project uses Husky to run Git hooks automatically when certain events occur. It uses `pre-commit` hook to run linting and formatting checks before each commit.