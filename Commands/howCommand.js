const discord = require('discord.js');



module.exports.run = async (client, message, args) => {

    try{
      
var botEmbed = new discord.MessageEmbed()
    .setTitle(`_***GameNight Commands***_`)
    .setDescription(`Ping is ${Date.now() - message.createdTimestamp}ms.`)
    .setColor("#001366")
    .addField('**Server Commands**', [
        `**!commands** | !commands <check dm>.`,
        `**!howcommand** | !howcommand <check dm>.`,
        `**!serverinfo** | !serverinfo.`,
        `**!hello** | !hello.`,
        `**!ping** | !ping.`,
        `**!update** | !update.`,
        `**!invite** | !invite **Night-bot**.`,
        `**!ticket** | !ticket.`,
        `**!new** | !new.`,

        '\u200b'
    ])
    .addField(`**Moderator Commands**`, [
        `**!kick** | !kick <@user> <reason>.`,
        `**!ban** | !ban <@user> <reason>.`,
        `**!tempmute** | !tempmute <@player> <seconds x 1000>`,
        `**!clear** | !clear <amount> (**NOT 99+**).`,
        `**!announce** |!announce <title> | <message> | <collor> | <channel>.`,
        `**!amongus** | !amongus <code>.`,
        `**!addrole** | !addrole <@player> <role.id>.`,
        `**!removerole** | !removerole <@player> <role.id>.`,
        `**!close** | !close.`,

        `\u200b`

    ])

    .addField(`**Music Commands**`, [
        `**!p** | !p <youtube link>.`,
        `**!disconnect** | !disconnect.`,

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
    name: "howcommand"
}