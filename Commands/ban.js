const discord = require("discord.js");
const botConfig = require("../botConfig.json");
const fs = require("fs");

module.exports.run = async (client, message, argument) => {
    var prefix = botConfig.prefix

    var loggingChannel = message.guild.channels.cache.find(channel => channel.name === "log")

    const args = message.content.slice(prefix.length).split(/ +/);

    if (!args[1]) return message.reply("No user given.");

    if (!args[2]) return message.reply("Give a reason.");

    if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("Sorry, you can't do this.");

    if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.reply("No permissions.");

    var banUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));

    var reason = args.slice(2).join(" ");

    var inviteCode = new discord.MessageEmbed()
    .setTitle("Gebanned")
    .setColor("RED")
    .setFooter(`© created by philippe#0354`)
    .setDescription(`${banUser} is banned. \n **Reason:** ${reason}. \n **Banned by:** ${message.author}.`);

    if (!banUser) return message.reply("user not found.");

    var embed = new discord.MessageEmbed()
        .setTitle("Player banned!")
        .setColor("RED")
        .setFooter(`© created by philippe#0354`)
        .setTimestamp()
        .setDescription(`** banned:** ${banUser}
            **reason:** ${reason}
            **banned by:** ${message.author}`);

    var embedPrompt = new discord.MessageEmbed()
        .setTitle("**Are you sure?**")
        .setColor("GREEN")
        .setFooter(`© created by philippe#0354`)
        .setDescription(`**React within 30 sec.** \n Do you want to ban ${banUser}?`);
      
    message.channel.send(embedPrompt).then(async msg => {

        var emoji = await promptMessage(msg, message.author, 30, ["✅", "❌"]);

        if (emoji === "✅") {

            msg.delete();

            banUser.ban({reason: "reason"}).catch(err => {
                if (err) return console.log(err);
            });

            message.reply(embed);

            loggingChannel.send(inviteCode)

        } else if (emoji === "❌") {

            msg.delete();

            message.reply("Ban cancelled").then(m => m.delete(5000));

        }

    });

}
async function promptMessage(message, author, time, reactions) {

    time *= 1000;

    for (const reaction of reactions) {
        await message.react(reaction);
    }

    const filter = (reaction, user) => reactions.includes(reaction.emoji.name) && user.id === author.id;

    return message.awaitReactions(filter, { max: 1, time: time }).then(collected => collected.first() && collected.first().emoji.name);
}

module.exports.help = {
    name: "ban"
}