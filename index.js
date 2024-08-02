const TelegramBot= require("node-telegram-bot-api");
const axios = require('axios');
// const token = '6460557426:AAGxWVU6WM8BG7FhOjTwVRqPH0zrUrQpaMU'; // order
// const token = '6757361705:AAFy0xNuIn9E_NqhZa0vmhi2qsi-_wDPB8k'; // report
const token = '6360641846:AAHosBn6WHKLWhALXdtYltR25sQrLbbgrKE'; // test
const bot = new TelegramBot(token, {polling: true, filepath: false});
const test_chat_id = '-4203108283'

const botApi = 'https://api.telegram.org/bot6460557426:AAGxWVU6WM8BG7FhOjTwVRqPH0zrUrQpaMU'

// const chatIdIndividual = '658137109'; // my group
const chatId_reportGroup = '-4248491424'

bot.on('message', async msg => {
  console.log('------msg.text', msg.text)
  await bot.sendMessage(test_chat_id  , msg.text).catch(e => console.log(e));


  try {
    // const result = await axios({
    //   url: 'https://0gb33gj0pj.execute-api.us-east-1.amazonaws.com/telegramBotGetMessage',
    //   method: 'post',
    //   data: {
    //     message: {
    //       chat: {
    //         title: 'Dinenation_report_Remonovo_',
    //       },
    //       text: '/Remonovo, 29-07-2024',
    //     }
    //   },
    // });
    // console.log('-----result', result)
  } catch (e) {
    console.log('---------e', e.message)
  }
})
