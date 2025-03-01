# ToDo App Backend

This is the backend for the ToDo App, built using NestJS with GraphQL for API management. The backend is secured using JWT authentication and includes all necessary steps for setup and deployment.

---

## Features

- **GraphQL API** for managing todos
- **JWT Authentication** to secure API endpoints
- Support for creating, updating, deleting, and fetching todos
- Environment variable management for secret configuration

---

## Prerequisites

Ensure the following tools are installed on your system:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

---

## Setup Instructions

### 1. Clone the Repository

git clone https://github.com/jakesisson/todo-app-backend.git

### Navigate into the project directory:

cd todo-app-backend

### 2. Install Dependencies
Run the following command to install all required dependencies:

npm install

### 3. Generate Environment Variables
To ensure the backend operates securely, generate a .env file with a secure JWT_SECRET:

Run the setup script:

node setup.js

This will create a .env file with a secure JWT_SECRET. If the file already exists, the script will leave it unchanged.

### 4. Verify .env Configuration
Ensure the .env file is generated in the root directory and contains:

JWT_SECRET=<your-generated-secret>
Note: Replace <your-generated-secret> if you prefer to manually set the secret.

### 5. Start the Development Server
Run the following command to start the server in development mode:

npm run start:dev
The backend will run on http://localhost:3000.

### 6. Test the API
You can access the GraphQL playground at:

http://localhost:3000/graphql

### File Structure

.
├── src/
│   ├── auth/             # Authentication module
│   ├── todo/             # Todo module with resolver, service, and entity
│   ├── main.ts           # Application entry point
├── .env                  # Environment variables
├── .env.example          # Example environment file
├── setup.js              # Script to generate .env file
├── README.md             # Documentation


## Scripts
### Start in Development Mode:

npm run start:dev

### Start in Production Mode:

npm run start:prod

### Run Tests:

npm test

### Generate a New .env File:

node setup.js
### Additional Notes
Ensure that .env is ignored by Git. The .gitignore file already contains .env.

If you encounter issues pushing to the repository, ensure your local branch is in sync with the remote by running:

git pull origin main --rebase


## Additional Instructions for macOS Users

If you're using macOS, follow these specific instructions to ensure a smooth setup:

### Node.js and npm Installation

- macOS users can install Node.js and npm via [Homebrew](https://brew.sh/):

  brew install node

- Alternatively, use nvm (Node Version Manager):
brew install nvm
mkdir ~/.nvm
echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.zshrc
echo '[ -s "/usr/local/opt/nvm/nvm.sh" ] && . "/usr/local/opt/nvm/nvm.sh"' >> ~/.zshrc
source ~/.zshrc
nvm install node

File Permissions
If you encounter permissions issues with node setup.js or npm install, use the following command to fix permissions:

sudo chmod -R 755 .

Development Server
By default, macOS may use ports for other services. If port 3000 is already in use, you can specify an alternative port when starting the server:

bash
Copy code
PORT=4000 npm run start:dev
Access the backend at http://localhost:4000.

Install Homebrew (Optional)
Homebrew is a popular package manager for macOS. If not installed, you can get it using:

/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

Notes for macOS Users
macOS handles most development tasks similarly to other platforms, but these instructions will help you avoid common pitfalls.
Ensure that the .env file generated by the setup script is properly placed in the root of your project directory before starting the server.
When switching between Node.js versions, use nvm use <version> to ensure compatibility with the project's dependencies.







