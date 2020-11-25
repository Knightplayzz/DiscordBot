const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const categoryID = "779405637334466612";

    if(!message.member.hasPermission("KICK_MEMBER")) return message.reply("Only admins can do this command");

    if(message.channel.parentID == categoryID){
        message.channel.delete();

        var embedCreateTicket = new discord.MessageEmbed()
        .setTitle(`Ticket ${message.channel.name}`)
        .setDescription("The ticket is **Closed**")
        .setFooter(`© created by philippe#0354`)
        .setTimestamp();

    var ticketChannel = message.member.guild.channels.cache.find(channel => channel.name === "log");
    if (!ticketChannel) return message.reply("Channel doesn't exist.")

    ticketChannel.send(embedCreateTicket);
    }else {

        message.channel.send("Do this command in a ticket.")

    }

}

module.exports.help = {
    name: "close"
}