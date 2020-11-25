const discord = require("discord.js");
const ytdl = require("ytdl-core");

module.exports.run = async (client, message, args) => {

    if(!message.member.voice.channel) return message.reply("Connect to a voice channel.");

    if(message.guild.me.voice.channel) return message.channel.send("Bot is already in the voice channel.");

    if(!args[0]) return message.reply("Give url.");

    var url = (args[0]);

    var validate = await ytdl.validateURL(args[0]);
    if(!validate) return message.channel.send("Geef een juist url op");

    var info = await ytdl.getInfo(args[0]);
    
    var options = {seek: 2, volume: 1, bitrate: 128000 };

    var channelJoin = message.member.voice.channel.join()
        .then(voiceChannel => {

            var stream = ytdl(args[0], {filter: 'audioonly' });
            var dispatcher = voiceChannel.play(stream, options);  
         
        }).catch(console.error);

        var song = new discord.MessageEmbed()
        .setTitle("**Song playing**")
        .setURL(`${url}`)
        .setColor("GREEN")
        .setFooter(`© created by philippe#0354`)
        .setTimestamp()
        .setDescription(`Playing the song.`)
    
      message.channel.send(song);
        
}

module.exports.help = {
    name: "p"
}