const TelegramBot = require('node-telegram-bot-api');
const token = 'IL_TUO_TOKEN'; // Sostituisci con il tuo token del bot Telegram

const bot = new TelegramBot(token, {polling: true});

// Comando /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Ciao! Sono un semplice bot Telegram. Puoi utilizzare comandi come /saluta.');
});

// Comando /saluta
bot.onText(/\/saluta/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Ciao! Come posso aiutarti oggi?');
});

// Risposta a messaggi di testo
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  if (msg.text.toLowerCase() === 'come stai?') {
    bot.sendMessage(chatId, 'Sto bene, grazie! E tu?');
  }
});

// Gestione degli errori
bot.on('polling_error', (error) => {
  console.log(`Errore di polling: ${error}`);
});

// Gestione dei messaggi non gestiti
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Mi dispiace, non ho capito questo comando. Prova con /start o /saluta.');
});
