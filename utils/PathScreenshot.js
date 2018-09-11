
const pathScreenshot = ({ platformName, deviceName, platformVersion }) => (id) => {
  return `./screenshots/${id}-${platformName}-${deviceName}-${platformVersion}.png`;
};

export default pathScreenshot;
