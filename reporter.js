const reporter = require('cucumber-html-reporter');
const fs = require('fs');
const path = require('path');

const jsonDir = 'reports/json';

// Check if the JSON directory exists and contains JSON files
if (!fs.existsSync(jsonDir)) {
    console.warn(`Warning: JSON report directory '${jsonDir}' does not exist. Skipping report generation.`);
    process.exit(0);
}

const jsonFiles = fs.readdirSync(jsonDir).filter(f => f.endsWith('.json'));
if (jsonFiles.length === 0) {
    console.warn(`Warning: No JSON files found in '${jsonDir}'. Skipping report generation.`);
    process.exit(0);
}

const options = {
    theme: 'bootstrap',
    jsonDir: jsonDir,
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
