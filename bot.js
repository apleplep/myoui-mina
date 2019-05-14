const Discord = require("discord.js");
const config = require("./config.json");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`)
    bot.user.setActivity("You", {type: "WATCHING"});
});

bot.login(config.token);
