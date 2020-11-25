const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var helloEmbed = new discord.MessageEmbed()
    .setTitle("**Update info**")
    .setColor("GREEN")
    .setTimestamp()
    .setFooter(`© created by philippe#0354`)
    .setDescription(`**What is new in this update?** \n !ticket, !new, !close, !announce fix, !role fix, !tempmute fix, role fixes, !update, !howcommand, !invite, welcome embed \n \n**When is the next update?** \n The next update is **23-11-2020**. \n \n **What is new in that update?** \n **Reaction roles**.`);

    message.channel.send(helloEmbed)

}

module.exports.help = {
    name: "update"
}