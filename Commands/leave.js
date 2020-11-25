const discord = require("discord.js");
const ytdl = require("ytdl-core");

module.exports.run = async (client, message, args) => {

    if(!message.member.voice.channel) return message.reply("**Connect to a voice channel.**");

    if(message.guild.me.voice.channelID != message.member.voice.channelID) return message.channel.send("**Sorry you are not connect to a voice channel.**")

    message.guild.me.voice.channel.leave();

        
}

module.exports.help = {
    name: "disconnect"
}