import attachmentCardTrello from "./AttachmentCardTrello";

it('file', () => {
  expect.assertions(1);
  return attachmentCardTrello({
    key: process.env.TRELLO_KEY,
    token: process.env.TRELLO_TOKEN,
    cardId: process.env.TRELLO_CARD_ID,
    filePath: './ios/screenshots/welcome_iphone6.png',
  })
    .then((success) => {
      expect(success).toEqual(true);
    });
});
