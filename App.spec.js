import wd from 'wd';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000;

const serverConfig = {
  host: 'localhost',
  port: 4723,
};

const iosCaps = {
  platformName: 'iOS',
  automationName: 'XCUITest',
  deviceName: process.env.IOS_DEVICE_NAME || 'iPhone 6',
  platformVersion: '11.4',
  app: `ios/build/Build/Products/${process.env.IOS_CONFIGURATION || 'Debug'}-iphonesimulator/BReactNative.app`,
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
