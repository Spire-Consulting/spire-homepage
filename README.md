# Spire Homepage

This is the repository for the frontend of the website spireconsulting.no

It fetches data from [Spire api](https://github.com/Spire-Consulting/spire-api)

#### Hosting

This website is hosted on Digital Ocean

## Getting started

To get started, run the following commands in the following order:

| Command                                                        | Description               |
| -------------------------------------------------------------- | ------------------------- |
| `git clone git@github.com:Spire-Consulting/spire-homepage.git` | clone project             |
| `cd spire-homepage`                                            | navigate into root folder |
| create a .env file in root position and add the needed values  | Get values from fredrik   |
| Have spire-api server running locally                          | Get from spire-api repo   |
| `npm install`                                                  | install dependencies      |
| `npm run dev`                                                  | run project in browser    |

## Technologies

-   React.js
-   Next.js
-   Tailwind.css

## Coding

This repository follows the company guidelines and code conventions. Can be found at the WIKI section in this repository.

### Lint

Lint software has been added to help developers follow the code conventions: <br />
The linter will find any "errors" (code that deviate from the conventions) and fix them automatically:

| Command            | Description       |
| ------------------ | ----------------- |
| `npm run lint`     | Find any "errors" |
| `npm run lint:fix` | Fix the "errors"  |

Note that some "errors" cannot be fixed automatically by the linting software, in that case you have to fix them manually.

### Prettier

Prettier is recomended to format on save. Follow these steps to activate
| Command | Description |
| ---------------------------------------------------------------- | ------------------------- |
| `ctrl + shift + p` and click on "Preferences: open settings(Json)| Open vscode settings.json |
| `Add the following line: "editor.formatOnSave": true, | Fix the "errors" |
