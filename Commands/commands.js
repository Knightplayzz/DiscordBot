const discord = require('discord.js');



module.exports.run = async (client, message, args) => {

    try{
      
var botEmbed = new discord.MessageEmbed()
    .setTitle(`_***GameNight Commands***_`)
    .setDescription(`Ping is ${Date.now() - message.createdTimestamp}ms.`)
    .setColor("#001366")
    .addField('**Server Commands**', [
        `**!commands** | Shows all commands.`,
        `**!howcommand** | Shows how to do a command.`,
        `**!serverinfo** | Information of the server.`,
        `**!hello** | Says hello back.`,
        `**!ping** | Shows the ping of the bot.`,
        `**!update** |  See all information about the updates.`,
        `**!invite** | Invite **Night-bot!**.`,
        `**!ticket** | Creates a ticket.`,
        `**!new** | Creates a ticket.`,

        '\u200b'
    ])
    .addField(`**Moderator Commands**`, [
        `**!kick** | Kick a user.`,
        `**!ban** | Get a user banned.`,
        `**!tempmute** | Mutes a player for given minutes.`,
        `**!clear** | Deletes the given amount of messages at a time.`,
        `**!announce** | Makes a announcement.`,
        `**!amongus** | Shows the code of the match.`,
        `**!addrole** | Adds a role to a player.`,
        `**!removerole** | Removes the role of a player.`,
        `**!close** | Closes a ticket.`,

        `\u200b`

    ])
    
    .addField(`**Music Commands**`, [
        `**!p** | Plays a youtube link.`,
        `**!disconnect** | Disconnect the bot.`,

        `\u200b`
    ])
    .setFooter(`© created by philippe#0354`)

    message.author.send(botEmbed);

    var dms = new discord.MessageEmbed()
        .setTitle("**commands**")
        .setColor("GREEN")
        .setDescription("All commands are send into your dm.")
        .setFooter(`© created by philippe#0354`)

        message.channel.send(dms).then(msg => msg.delete({ timeout: 5000 }));

    

    }catch(error){
    message.reply("something has gone wrong?");
    }


}



  
  module.exports.help = {
    name: "commands"
}

