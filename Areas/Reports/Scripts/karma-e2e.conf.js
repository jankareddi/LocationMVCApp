// base path, that will be used to resolve files and exclude
basePath = '../scripts/';

// frameworks to use
//frameworks = ['jasmine', 'ng-scenario']; -- does not seem necessary

files = [
  ANGULAR_SCENARIO,
  ANGULAR_SCENARIO_ADAPTER,
  'vendor/angular.js',
  'vendor/angular-*.js',
  'app/**/*.js',
  'app/services/**/*.js',
  'app/controllers/**/*.js',
  'app/services/**/*.js',
  'specs/e2e/scenarios.js'
];

// list of files to exclude
exclude = [

];

//preprocessors = {
//  '**/app/*.js': 'coverage'
//};

reporters = ['progress'];

// web server port
port = 9876;


// cli runner port
runnerPort = 9100;


// enable / disable colors in the output (reporters and logs)
colors = true;


// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;


// enable / disable watching file and executing tests whenever any file changes
autoWatch = true;

urlRoot = '/__karma/';


// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
browsers = ['Chrome'];

proxies = {
    '/': 'http://localhost:63323/'
};


// If browser does not capture in given timeout [ms], kill it
captureTimeout = 60000;


// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = false;


//junitReporter = {
//  outputFile: 'test_out/e2e.xml',
//  suite: 'e2e'
//};
