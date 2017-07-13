const dict = require('./dict.js');
const vocabulary = require('./vocabulary.json');
const TelegramBot = require('node-telegram-bot-api');

const token = '406574873:AAF9gmVwTU5yI90LEElnC-SceUdHYV2ad90';
const bot = new TelegramBot(token, {polling: true});

const sendWord = chatId => {
  const options = { parse_mode: 'Markdown' };
  bot.sendMessage(chatId, dict.getWord(vocabulary), options);
};

bot.onText(/\/start/, msg => {
  const chatId = msg.chat.id;
  const repeatTime = 1000 * 60 * 60 * 12;

  sendWord(chatId);
  setInterval(sendWord, repeatTime, chatId);
});
