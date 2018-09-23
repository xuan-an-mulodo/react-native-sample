import * as Appium from "./utils/Appium";

let driver;

beforeAll(async function() {
  driver = await Appium.init();
})

afterAll(async function() {
  await Appium.quit(driver);
});

it('Open app screen', async function() {
  await verifyScreenshot('App');
});

async function verifyScreenshot(id) {
  const base64 = await driver.takeScreenshot();
  const caps = process.env.IS_ANDROID ? Appium.androidCaps(process.env.IS_RELEASE) : Appium.iosCaps(process.env.IS_RELEASE);
  const pathScreenshot = require('./utils/PathScreenshot').default(caps);
  return await require('./utils/VerifyScreenshot').default(base64, id, pathScreenshot);
}
