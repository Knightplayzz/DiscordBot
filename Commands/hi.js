const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    return message.channel.send("hi!");

}

module.exports.help = {
    name: "hi"
}