const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var helloEmbed = new discord.MessageEmbed()
    .setTitle("**Greatings**")
    .setColor("BLUE")
    .setFooter(`© created by philippe#0354`)
    .setDescription(`${message.author} You are greeted by V2C BOT!`);

    message.channel.send(helloEmbed)

}

module.exports.help = {
    name: "hello"
}