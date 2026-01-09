const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonFile: 'cypress/reports/cucumber-report.json',
  output: 'cypress/reports/cucumber-report.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  screenshotsDirectory: 'cypress/screenshots',
  storeScreenshots: true,
  metadata: {
    "App Version": "1.0.0",
    "Test Environment": "QA",
    "Browser": "Chrome",
    "OS": "Windows 11",
    "Automation Engineer": "Sebastian Beltran",
    "Company": "Blankfactor"
  }
};

reporter.generate(options);