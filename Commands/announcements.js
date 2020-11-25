const discord = require("discord.js");

var botEmbedError = new discord.MessageEmbed()
.setDescription("**Command Error**")
.setColor("RED")
.addField(`**Error chould be**`, [
`**Error:** Spelling.`,
`**Error:** Permission.`,


`\u200b`

])
.setFooter(`© created by philippe#0354`)

module.exports.run = async (client, message, args) => {

  if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(botEmbedError);
    
  var seperator = "|"

  if(args[0] == null){

    var embed = new discord.MessageEmbed()
    .setTitle("Use")
    .setColor("RED")
    .setFooter(`© created by philippe#0354`)
    .setDescription(`Make a announcement thru: \n -announcement titel ${seperator} message ${ seperator} coller ${seperator} channel`);

    return message.reply(embed);
  }

  var argsList = args.join(" ").split(seperator);

  if(argsList[2] === undefined) argsList[2] = "BLUE";
  if(argsList[3] === undefined) argsList[3] = "〔📌〕mededelingen";

  var options = {

    titel: argsList[0],
    bericht: argsList[1] || "**No message given!**",
    kleur: argsList[2].trim(),
    kanaal: argsList[3].trim()
  }

  var announceEmbed = new discord.MessageEmbed()
  .setTitle(`${options.titel}`)
  .setColor(options.collor)
  .setDescription(`${options.bericht} \n\n **Message form:** ${message.author} \n`)
  .setFooter(`© created by philippe#0354`)
  .setTimestamp();
  

  var channel = message.member.guild.channels.cache.find(channels => channels.name === options.kanaal);
  if(!channel) return message.reply("Not an existing channel.");

  channel.send(announceEmbed);

}

module.exports.help = {
    name: "announce"
}