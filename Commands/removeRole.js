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

    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(botEmbedError1);
    
    
    const targetUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
        if (!targetUser) {
            return message.channel.send(botEmbedError2);
        }
        var roleRemove = new discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("**The rol has been removed!**")
        .setDescription(`by: ${targetUser}.`)
        .setFooter(`© created by philippe#0354`)
        .setTimestamp();

        const role = message.guild.roles.cache.get(args[1])
        if (!role) {
            message.reply(`There is no role with the name "${role}"`)
            return;
        }

        targetUser.roles.remove(role);

        console.log('Made it this far')

        return message.channel.send(roleRemove);
    

    
    
}
module.exports.help = {
    name: "removerole"
}