
export default function attachmentCardTrello({ key, token, cardId, filePath }) {
  var request = require("request");
  var fs = require("fs");

  var options = {
    method: 'POST',
    url: `https://api.trello.com/1/cards/${cardId}/attachments`,
    qs: { key, token },
    formData: {
      file: fs.createReadStream(filePath),
    },
  };

  return new Promise((resolve, reject) => {
    request(options, function (error, response, body) {
      if (error) {
        reject(error)
      };
      resolve(true);
    });
  });
}
