import wd from 'wd';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000;

const APP_IOS_DEBUG       = 'ios/build/Build/Products/Debug-iphonesimulator/BReactNative.app';
const APP_IOS_RELEASE     = 'ios/build/Build/Products/Release-iphonesimulator/BReactNative.app';
const APP_ANDROID_DEBUG   = 'android/app/build/outputs/apk/app-debug.apk';
const APP_ANDROID_RELEASE = 'android/app/build/outputs/apk/app-release.apk';

const serverConfig = {
  host: 'localhost',
  port: 4723,
};

const iosCaps = (isRelease) => ({
  platformName: 'iOS',
  automationName: 'XCUITest',
  deviceName: process.env.IOS_DEVICE_NAME || 'iPhone 6',
  platformVersion: process.env.IOS_PLATFORM_VERSION || '11.4',
  app: isRelease ? APP_IOS_RELEASE : APP_IOS_DEBUG,
});

const androidCaps = (isRelease) => ({
  platformName: 'Android',
  automationName: 'UiAutomator2',
  deviceName: process.env.ANDROID_DEVICE_NAME || 'Android Emulator',
  platformVersion: process.env.ANDROID_PLATFORM_VERSION || '9',
  app: isRelease ? APP_ANDROID_RELEASE : APP_ANDROID_DEBUG,
});

export async function init(
  isAndroid: boolean = process.env.IS_ANDROID,
  isRelease: boolean = process.env.IS_RELEASE)
{
  const driver = await wd.promiseChainRemote(serverConfig);
  await driver.init(isAndroid ? androidCaps(isRelease) : iosCaps(isRelease));
  return driver;
}

export async function quit(driver) {
  await driver.quit();
}
