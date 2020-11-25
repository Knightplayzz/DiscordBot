const discord = require("discord.js");
  
  module.exports.run = async (client, message, args) => {

    var error = new discord.MessageEmbed()
      .setTitle("**Error**")
      .setColor("RED")
      .setFooter(`© created by philippe#0354`)
      .setDescription(`${message.author} you don't have permission for this command.`);

    var loggingChannel = message.guild.channels.cache.find(channel => channel.name === "〔🔪〕among-us")
    if (!loggingChannel) return message.channel.send("Kan het kanaal niet vinden");

    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(error);

     var code = args.join(" ");

    if(args[0] == null){

      var embed = new discord.MessageEmbed()
      .setTitle("**No code**")
      .setColor("RED")
      .setFooter(`© created by philippe#0354`)
      .setDescription(`You need to type the code of the amongus match.`);
  
      return message.reply(embed);
    }

    var inviteCode = new discord.MessageEmbed()
    .setTitle("Among us")
    .setColor("RED")
    .setFooter(`© created by philippe#0354`)
    .setDescription(`De code is ${code}`);


    loggingChannel.send(inviteCode)
}

module.exports.help = {
    name: "amongus"
}