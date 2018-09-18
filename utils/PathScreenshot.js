
const pathScreenshot = ({ platformName, deviceName, platformVersion }) => (id) => {
  const path = `./screenshots/${id}-${platformName}-${deviceName}-${platformVersion}.png`;
  return path.replace(' ', '_')
};

export default pathScreenshot;
