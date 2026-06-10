module.exports = {
default: {
    require: ['support/hooks.js', 'support/world.js', 'step_definitions/**/*.steps.js'],
          format: [
            'progress-bar',
            'json:reports/cucumber_report.json'
          ],
          formatOptions: { snippetInterface: 'async-await' },
          publishQuiet: true
            }
};
