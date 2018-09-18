
const pathScreenshot = ({ platformName, deviceName, platformVersion }) => (id) => {
  const path = `./screenshots/${id}-${platformName}-${deviceName}-${platformVersion}.png`;
  return removeWhiteSpace(path);
};

export function removeWhiteSpace(str) {
  return str.replace(/ /g, '');
}

export default pathScreenshot;
