// How to create a bot with telegram: https://core.telegram.org/bots
const TelegramBot = require('node-telegram-bot-api');

// Create environment variables with Telegram token you receive from @BotFather and with chat id
const token = process.env.TELEGRAM_TOKEN; 
const chatId = process.env.TELEGRAM_CHAT_ID;

const bot = new TelegramBot(token, {polling: false});

function sendMessage(msg) {
    bot.sendMessage(chatId, msg);
}

module.exports.sendMessage = sendMessage