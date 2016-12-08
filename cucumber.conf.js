require('ts-node/register');

exports.config = {
  allScriptsTimeout: 11000,
  specs:['features/**/*.feature'],
  // multiCapabilities: [
  //   { 'browserName': 'chrome'},
  //   { 'browserName': 'firefox'}
  // ],
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['show-fps-counter=true']
    }
  },
  multiCapabilities: [
    { 'browserName': 'chrome'},
    { 'browserName': 'firefox'}
  ],
  plugins: [{
    package: 'protractor-notify-plugin'
  }],
  baseUrl: 'http://localhost:4200/',
  directConnect: true,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    compiler: "ts:ts-node/register",
    format: "pretty",
    require:[
      'features/step_definitions/**/*.steps.ts'
    ]
  },
  useAllAngular2AppRoots: true,
  onPrepare: function() {
    const globals = require('protractor');
    const browser = globals.browser;
    browser.ignoreSynchronization = true;
  }
};
