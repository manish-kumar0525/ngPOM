exports.config={
    chromeDriver:'./selenium/chromedriver_2.45.exe',
    // seleniumAddress:'http://192.168.42.116:4444/wd/hub',
    seleniumServerJar:'./selenium/selenium-server-standalone-3.141.59.jar',
    // directConnect:true,
    specs:'JSFilesLocation/Specs/test.js',
    SELENIUM_PROMISE_MANAGER: false,
    capabilities: {
        'browserName': 'chrome',
        chromeOptions: {
          args: [
              '--start-maximized'
          ]
        }
      }
}