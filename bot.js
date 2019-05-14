const Discord = require("discord.js");
const config = require("./config.json");
const bot = new Discord.Client({disableEveryone: true});
const PREFIX = '-m';


bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`)
    bot.user.setActivity("-m", {type: "PLAYING"});
});

bot.on('message', message=>{
   
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[1]){
        case 'Hai':
            message.reply('annyeong..');
        break;
    }
})

bot.on('message', message=>{
   
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[1]){
        case 'status':
            message.channel.sendMessage(`Azka's wife`)
            break;
        case 'IG':
            message.channel.sendMessage('@meganee.chan, go follow it!')
            break;
        case 'introduce':
            message.channel.sendMessage('ONE IN A MILLION! ANNYEONG HASEYO TWICE IMNIDA 👏👏👏👏🎉🎉🎊🎊')
            break;
        case 'play':
            if (!args[2]) {
                message.channel.sendMessage('mmm..');
                return;
            }
        case 'mina':
            message.channel.sendMessage('🐧🐧🐧')
            break;

    }
})

bot.login(config.token);
