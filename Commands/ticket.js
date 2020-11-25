const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const categoryID = "779405637334466612";

    var userName = message.author.username;

    var ticketBestaat = false;

    message.guild.channels.cache.forEach(channel => {
        
        if(channel.name == userName){
            ticketBestaat = true;

            message.reply("You already have a ticket.");

            return;

        }
    });

    if(ticketBestaat) return;

    var waitEmbed = new discord.MessageEmbed()
    .setTitle(`Hi ${message.author.username}`)
    .setDescription("Ticket has been made!")
    .setFooter(`© created by philippe#0354`)
    .setTimestamp();

message.channel.send(waitEmbed);

message.guild.channels.create(userName, {type: 'text'}).then(
    (createdChannel) => {
        createdChannel.setParent(categoryID).then(
            (settedParent) => {

                settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === '@everyone'), {
                    SEND_MESSAGES: false,
                    VIEW_CHANNEL: false
                });

                        settedParent.updateOverwrite(message.author.id, {
                        CREATE_INSTANT_INVITE: false,
                        READ_MESSAGES: true,
                        SEND_MESSAGES: true,
                        ATTACH_FILES: true,
                        CONNECT: true,
                        ADD_REACTIONS: true,
                        VIEW_CHANNEL: true,
                        READ_MESSAGE_HISTORY: true

                    });

                    var embedSay = new discord.MessageEmbed()
                    .setTitle(`Hi ${message.author.username}`)
                    .setDescription("What is your problem/question.");

                    settedParent.send(embedSay);


            }
        ).catch(err => {
            message.channel.send("Someting went wrong");
        });
    }
).catch(err => {
    message.channel.send("Someting went wrong");
});

}

module.exports.help = {
    name: "ticket"
}