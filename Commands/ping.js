const Dicord = require ("discord.js")

module.exports.run = async (client, message, args) => {

    var pingEmbed = new Dicord.MessageEmbed()
        .setTitle("**:ping_pong: Pong!**")
        .setColor("GREEN")
        .setFooter(`© created by philippe#0354`)
        .setDescription(`Latency is ${Date.now() - message.createdTimestamp}ms.`);
    
      message.channel.send(pingEmbed);
  };
module.exports.help = {
    name: "ping"
}