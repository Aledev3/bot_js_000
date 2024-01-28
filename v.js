const { Telegraf } = require('telegraf');
const bot = new Telegraf('IL_TUO_TOKEN'); // Sostituisci con il tuo token del bot Telegram

// Middleware per il comando /start
bot.start((ctx) => {
  ctx.reply('Ciao! Sono un semplice bot Telegram. Puoi utilizzare comandi come /saluta.');
});

// Middleware per il comando /saluta
bot.command('saluta', (ctx) => {
  ctx.reply('Ciao! Come posso aiutarti oggi?');
});

// Middleware per rispondere a "come stai?"
bot.hears('come stai?', (ctx) => {
  ctx.reply('Sto bene, grazie! E tu?');
});

// Middleware per gestire messaggi non gestiti
bot.on('text', (ctx) => {
  ctx.reply('Mi dispiace, non ho capito questo comando. Prova con /start o /saluta.');
});

// Middleware per gestire errori
bot.catch((err, ctx) => {
  console.error(`Errore nella gestione del messaggio: ${err}`);
  ctx.reply('Si è verificato un errore.');
});

// Avvio del bot
bot.launch();
