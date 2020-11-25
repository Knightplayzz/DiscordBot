const discord = require("discord.js");

var botEmbedError1 = new discord.MessageEmbed()
.setColor("RED")
        .setTitle("**An error has occurred!**")
        .setDescription(`No permissions`)
        .setFooter(`© created by philippe#0354`)
        .setTimestamp();

var botEmbedError2 = new discord.MessageEmbed()
.setColor("RED")
        .setTitle("**An error has occurred!**")
        .setDescription(`Forgot to type the name.`)
        .setFooter(`© created by philippe#0354`)
        .setTimestamp();
 


module.exports.run = async (bot, message, args) => {

    var logChannel = message.guild.channels.cache.find(channel => channel.name === "log")

    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(botEmbedError1);
    
    
    const targetUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
        if (!targetUser) {
            return message.channel.send(botEmbedError2);
        }

        const role = message.guild.roles.cache.get(args[1])
        if (!role) {
            message.reply(`There is no role with the name "${role}"`)
            return;
        }

        console.log('Made it this far')

        var roleGiven = new discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle(`**Role has been given!**`)
        .setDescription(`**To:** ${targetUser}. \n **Role:** ${role}. \n **By:** ${message.author}.`)
        .setFooter(`© created by philippe#0354`)
        .setTimestamp();

        var log = new discord.MessageEmbed()
        .setTitle("**Role add**")
        .setColor("RED")
        .setFooter(`© created by philippe#0354`)
        .setTimestamp()
        .setDescription(`**By:** ${targetUser} a role has been added. \n **role:** ${role}. \n **Gave by:** ${message.author}.`);

        targetUser.roles.add(role);

        logChannel.send(log);
        return message.channel.send(roleGiven);
    

    
    
}
module.exports.help = {
    name: "addrole"
}