# Welcome to this Challenge!

This is a technical challenge designed to evaluate your knowledge in web and API automation.
The technologies used for this challenge are Cypress, Cucumber, Mochawesome, and Dotenv.

## Instructions for Downloading and Running the Project

1. **Clone the Repository**  
   Start by cloning the repository to your preferred location. Use the following command in your terminal:
   
   ```bash
   git clone https://github.com/nahutrovato/challengeSauce.git

    Install Dependencies
    Once the repository is cloned, open a terminal and navigate to the root directory of the project. Then, execute the following command to install all necessary dependencies:

npm install

You can verify the installed dependencies in the package.json file.

Create the .env File
In the root directory of the project, create a .env file that will contain the environment variables with the necessary values to run the project. These values are sensitive and have been obfuscated to avoid exposing sensitive data. You can find the names of the environment variables in the .env.example file within the project.

Run the Project
You can execute the project using the following command:

    npm run test

    This will run the Cypress suite via CLI, and once finished, it will generate an automatic report of the complete execution. The report can be found in the reports folder.

Project Structure

    e2e: Contains the end-to-end test files.
        features: Folder containing Cucumber feature files.
        steps_definitions: Folder containing Cucumber step definition files.
    reports: Folder containing the execution reports.