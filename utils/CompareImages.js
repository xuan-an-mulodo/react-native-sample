
export default function compareImages(image1, image2, pathImageDiff) {
  return getDiffImageData(image1, image2)
    .then(async (data) => {
      if (!data) {
        return true;
      }
      await fs.writeFileSync(pathImageDiff, data);
      return false;
    });
}

function getDiffImageData(image1, image2) {
  const compareImages = require("resemblejs/compareImages");
  return compareImages(image1, image2)
    .then((data) => {
      if (data.rawMisMatchPercentage === 0) {
        return null;
      }
      return data.getBuffer();
    });
}
