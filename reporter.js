const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonDir: 'reports/json',
  output: 'reports/cucumber_report.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: false,
  metadata: {
    'App Version': '1.0.0',
    'Test Environment': 'QA Practice',
    'Browser': 'Chromium (Playwright)',
    'Parallel': 'Scenarios',
    'Executed': 'GitHub Actions'
  }
};

reporter.generate(options);
