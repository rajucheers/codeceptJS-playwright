const browser = "";
exports.config = {
	exclude: [
			'./spec_test.js'
	  ],
  tests: './*_test.js',
  output: './output',
  waitForNavigation: ["load", "networkidle2"],
  waitForTimeout: 5000,
  plugins: {
	"allure": {
		"enabled": true
	}
	/*"screenshotOnFail": {
      // "enabled": true
	  // "uniqueScreenshotNames": false
    },*/
    // wdio: {
    //   enabled: true,
    //   services: ['selenium-standalone'],
	  // //connectionRetryCount: 3,
	  // seleniumArgs: {
		// javaArgs: [
		//   '-Dwebdriver.edge.driver=<path_to_driver>'
		//     ]
	  //   }
    // }
  },
  // helpers: {
  //   Puppeteer: {
  //     browser: "chrome",
  //     "ignoreHTTPSErrors": true,
  //     //marionette: true,
  //     osPlatform: 'Windows',
  //     osVersion: '10',
  //     host: '127.0.0.1',
  //     port: 4444,
  //     show: true,
  //     restart: false,
  //     //waitforInterval: 500,
  //     desiredCapabilities: {
  //       chromeOptions: {
  //         args: [ /*"--headless",*/ "--disable-gpu", "--window-size=1920x1680", "--no-sandbox"]
  //       }
  //     }
  //   }
  // },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {
    reporterOptions: {
      "codeceptjs-cli-reporter": {
        stdout: "-",
        options: {
          verbose: false,
          steps: true
        }
      },
      mochawesome: {
        stdout: "/output/test-results/console.log",
        options: {
          reportDir: "/output/test-results",
          reportFilename: "report"
        }
      },
      "mocha-junit-reporter": {
        stdout: "-",
        options: {
          mochaFile: "/output/test-results/result.xml"
        }
      }
    }
  },
  name: 'vsraj'
}
exports.browserConfig = {
  ffConfig : {
    helpers: {
      Playwright: {
        browser: "firefox",
        "ignoreHTTPSErrors": true,
        //marionette: true,
        osPlatform: 'Windows',
        osVersion: '10',
        host: '127.0.0.1',
        port: 4444,
        show: true,
        restart: false
      }
    }
  },
  chConfig: {
    helpers: {
      Playwright: {
        browser: "chromium",
        "ignoreHTTPSErrors": true,
        //marionette: true,
        osPlatform: 'Windows',
        osVersion: '10',
        host: '127.0.0.1',
        port: 4444,
        show: true,
        restart: false,
        desiredCapabilities: {
          chromeOptions: {
            args: [ /*"--headless",*/ "--disable-gpu", "--window-size=1920x1680", "--no-sandbox"]
          }
        }
      }
    }
  }
}

  