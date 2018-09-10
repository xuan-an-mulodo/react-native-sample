import wd from 'wd';
import fs from 'fs';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000;

const serverConfig = {
  host: 'localhost',
  port: 4723,
};

const iosCaps = {
  platformName: 'iOS',
  automationName: 'XCUITest',
  deviceName: 'iPhone 6',
  platformVersion: '11.4',
  app: 'ios/BReactNative.zip',
};

let driver;

beforeAll(async function() {
  driver = await wd.promiseChainRemote(serverConfig);
  await driver.init(iosCaps);
})

afterAll(async function() {
  await driver.quit();
});

it('Open first screen', async function() {
  await driver.waitForElementByAccessibilityId('Welcome to React Native!');
});
