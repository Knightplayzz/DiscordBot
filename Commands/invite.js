const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var url = "https://discord.com/api/oauth2/authorize?client_id=777926610971000876&permissions=8&scope=bot"

    var invite = new discord.MessageEmbed()
    .setTitle("**Invite Night-bot**")
    .setColor("BLUE")
    .setFooter(`© created by philippe#0354`)
    .setURL(`${url}`)

    message.channel.send(invite)

}

module.exports.help = {
    name: "invite"
}

  