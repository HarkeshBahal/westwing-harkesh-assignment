# Westwing assignment automation Framework
Automation Framework for Westwing website

# Prerequisite:
  1. Docker desktop
  2. Node.js installation
  3. NPM installation
  4. Docker up and running
  5. Verify above prerequite by Docker --version, node -v and npm -v

# To run the framework use following steps:-
  1. Clone this repository using "git clone".
  2. Navigate to folder and Run command "npm Install", to install all dependencies.
  3. This framework can be run locally on the Chrome and Firefox browsers or remotely on the Docker on the Firefox/Chrome
  4. Run command 'npm run test_chrome' or 'npm run test_firefox' to run automation locally on the firefox or chrome
  ## Docker
  1. Navigate to automation main folder and run 'docker-compose up'
  2. Then run the command 'npm run testdocker'
  ## Report
  1. After tests "allure-results" folder will be generated, which will contain test results.
  2. To view test reports navigate to root directory of repository and run command "allure generate -c allure-results/ && allure open"**