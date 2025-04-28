const TelegramBot = require("node-telegram-bot-api");
const axios = require('axios');

const token = '6460557426:AAGxWVU6WM8BG7FhOjTwVRqPH0zrUrQpaMU';
const bot = new TelegramBot(token, { polling: true });
// const urlAmazon = 'https://0gb33gj0pj.execute-api.us-east-1.amazonaws.com/telegramBotGetMessage';
// const urlAmazon = 'https://2ib05hqbkh.execute-api.us-east-1.amazonaws.com/bot-order-report';
const urlAmazon = 'https://6b1ndyhayd.execute-api.us-east-1.amazonaws.com/bot-order-report';

bot.on('message', async msg => {
  const {text, chat} = msg;

  try {
    await axios({
      url: urlAmazon,
      method: 'post',
      data: {
        message: {
          chat: {
            id: chat.id,
          },
          text: text,
        }
      },
    });
  } catch (e) {
    console.error('Error:', e.message);
  }
});
