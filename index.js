const Eris = require("eris");
let bot = new Eris("");
let prefix = ".";

bot.on("ready", () => {
    console.log("Ready!");
    bot.editStatus("watching");
})

bot.on("messageCreate", async message => {
    if(message.author.bot || !message.channel.guild) return;
    if(!message.content.startsWith(prefix)) return;
    
    if(message.content.startsWith(`${prefix}hello`)) {
        return message.channel.createMessage("BYE BYE!");
    };

    if(message.content.startsWith(`${prefix}bestgroup`)) {
        return message.channel.createMessage("(G)I-DLE");
    };

    if(message.content.startsWith(`${prefix}embed`)) {
        let embed = {
            title: "Let's Go Team!",
            description: "We're gonna make the best bot ever",
            color: 0x005580,
            image: {
                url: 'https://64.media.tumblr.com/e120cc1c8106f73ef066a12a067ee18f/c1c276e7dd3bef59-26/s640x960/31b907ba9fa4de3e1192949cbcb9f654d9a097df.gif'
            }
        }
        return message.channel.createMessage({embed: embed});
    };
});

bot.connect();