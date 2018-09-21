import * as Appium from "./utils/Appium";

let driver;

beforeAll(async function() {
  driver = await Appium.init();
})

afterAll(async function() {
  await Appium.quit(driver);
});

it('Open app screen', async function() {
  await driver.elementsByAccessibilityId('Welcome to React Native!');
});
