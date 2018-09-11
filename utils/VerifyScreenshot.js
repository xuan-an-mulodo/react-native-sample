import fs from 'fs';
import compareImages from './compareImages';

export default async function verifyScreenshot(base64, id, pathScreenshot) {
  const pathImage1 = pathScreenshot(id);
  const isExists = await fs.existsSync(pathImage1);
  if (!isExists) {
    await saveScreenshot(pathImage1, base64);
    return true;
  }

  const image1 = await fs.readFileSync(pathImage1);
  const pathTemp = pathScreenshot('tmp');
  await saveScreenshot(pathTemp, base64);

  const image2 = await fs.readFileSync(pathTemp);
  const pathImageDiff = pathScreenshot(`_diff_${id}`);
  return compareImages(image1, image2, pathImageDiff);
}

function saveScreenshot(path, base64) {
  return fs.writeFileSync(path, base64, { encoding: 'base64' });
}
