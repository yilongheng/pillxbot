const {Client, Intents} = require('discord.js');
const bot = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});

const token = 'OTI2OTIyODUyNzQ0MTk2MTQ2.YdCuLQ.4Dbo_K9LhUwgfftTXbhwfs9QBJ8';

bot.on('ready', () =>{
    console.log("The Pillx Bot is online!");
})

bot.on('message', msg=>{
    if (msg.content === 'Hello Pillx Bot!'){
        msg.reply('Hello earthling! :D')
    }
})

bot.login(token);