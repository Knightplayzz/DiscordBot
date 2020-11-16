const discord = require("discord.js");
const { rename } = require("fs");

module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("**No permission!**");

    if (!args[0]) return message.reply("How much messages.");

    if (Number.isInteger(parseInt(args[0]))) {

        var amount = parseInt(args[0]) + 1;

        message.channel.bulkDelete(amount).then(() => {

            if (args[0] <= 0) {
                message.reply("I can't delete 0 messages!").then(msg => msg.delete({ timeout: 3000 }));
            } else if (args[0] == 1) {
                message.reply("I deleted 1 message!").then(msg => msg.delete({ timeout: 3000 }));
            } else{
                message.reply(`I deleted ${args[0]} messages!`).then(msg => msg.delete({ timeout: 3000 }));
            }

        })


    } else {
        return message.reply("Give a number!").then(msg => msg.delete({ timeout: 2500 }));;
    }


}

module.exports.help = {
    name: "clear"
}