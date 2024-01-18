## Running the Project

1. Cloning the repo and setting up the project:
   - **Note:** this project should be run on Node v20 or higher. It is recommended you use NVM (Node Version Manager) to manage your Node versions.
   - Clone the repo and then open the root folder in your IDE of choice.
   - If you are using VS Code you can open the workspace file ***crypto-banter-assessment.code-workspace*** with VSCode to suggest recommended VSCode extensions and to have a smoother (and consistent) developer experience
   - Inside the root directory run ***npm install*** at the command line to install the dependencies
2. NPM Commands (as seen inside package.json)
   - **npm run start** Will start expo with a menu allowing you to select how to proceed. If you install the expo app on your device you can scan the QR code at the terminal to run the application from there (i.e. your phone).
   - **npm run lint** Runs an ESLint check (and fix) on all the TypeScript/JavaScript files in the project
   - **npm run prettier** Runs a Prettier format on all the TypeScript/JavaScript/JSON code in the project
   - **npm run format** Runs an ESLint and Prettier check and format in sequence across the project

