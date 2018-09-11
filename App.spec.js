import wd from 'wd';
import verifyScreenshot from './utils/VerifyScreenshot';
import pathScreenshot from './utils/PathScreenshot';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000;

const serverConfig = {
  host: 'localhost',
  port: 4723,
};

const iosCaps = {
  platformName: 'iOS',
  automationName: 'XCUITest',
  deviceName: process.env.IOS_DEVICE_NAME,
  platformVersion: '11.4',
  app: 'ios/build/Build/Products/Debug-iphonesimulator/BReactNative.app',
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
  expect.assertions(1);
  await driver.waitForElementByAccessibilityId('Welcome to React Native!');
  await verifyScreenshot(await driver.takeScreenshot(), 'App', pathScreenshot(iosCaps))
    .then((result) => expect(result).toBeTruthy());
});
