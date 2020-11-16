const discord = require('discord.js');
const os = require('os');
const moment = require('moment');
const ms = require('ms');

const filterLevels = {
    DISABLED: 'On',
    MEMBERS_WITHOUT_ROLES: 'No role given',
    ALL_MEMBERS: 'Everyone'
};
const regions = {
    brazil: 'Brazil',
    europe: 'Europe',
    hongkong: 'Hong Kong',
    india: 'India',
    japan: 'Japan',
    russia: 'Russia',
    singapore: 'Singapore',
    southafrica: 'South Africa',
    sydney: 'Sydney',
    'us-central': 'Us Central',
    'us-east': 'US East',
    'us-west': 'US West',
    'us-south': 'US South'
};

module.exports.run = async (bot, message, args) => {
    var roles = message.guild.roles.cache.sort((a, b) => b.posistion - a.posistion).map(role => role.toString());
    var members = message.guild.members.cache;
    var channels = message.guild.channels.cache;
    var emojis = message.guild.emojis.cache;
    const { guild } = message;

    var botEmbed = new discord.MessageEmbed()
    .setThumbnail(message.guild.iconURL({format: 'png'}))
    .setDescription("**__Server Information__**")
    .setColor("#001366")
    .addField('**General**', [
        `**-> Name:** ${message.guild.name}`,
        `**-> ID:** ${message.guild.id}`,
        `**-> Owner:** ${message.guild.owner.user.tag} (${message.guild.ownerID})`,
        `**-> Region:** ${regions[message.guild.region]}`,
        `**-> Boost Tier:** ${message.guild.premiumTier ? `Tier ${message.guild.premiumTier}` : 'None'}`,
        `**-> Explicit Filter:** ${filterLevels[message.guild.explicitContentFilter]}`,
        `**-> Time Created:** ${moment(message.guild.createTimeStamp).format('LT')} ${moment(message.guild.createTimeStamp).format('LL')} ${moment(message.guild.createTimeStamp).fromNow()}`,
        `**-> Server Created:** ${message.guild.createdAt}`,
        `**-> Bot Created By:** philippe`,
        
        '\u200b'

    ])
    .addField('Statistics', [
        `**- 🎮 Role Count:** ${roles.length}`,
        `**- 🔧 Emoji Count:** ${emojis.size}`,
        `**- 🔧 Regular Emoji Count:** ${emojis.filter(emojis => !emojis.animated).size}`,
        `**- 🎮 Animated Emoji Count:** ${emojis.filter(emojis => emojis.animated).size}`,
        `**- 🖥️ Member Count:** ${message.guild.memberCount}`,
        `**- :bust_in_silhouette: Humans:** ${members.filter(member => !member.user.bot).size}`,
        `**- :robot: Bots:** ${members.filter(member => member.user.bot).size}`,
        `**- :page_facing_up: Text Channels:** ${channels.filter(channel => channel.type === 'text').size}`,
        `**- :loud_sound: Voice Channels:** ${channels.filter(channel => channel.type === 'voice').size}`,
        `**- 🏆 Boost Count:**  ${message.guild.premiumSubcriptionCount || '0'}`,
        `**- ⏱ My uptime is:** My uptime is \`${ms(bot.uptime, {long: true})}\``,
        '\u200b'
    ])
    .addField('Presence'    , [
        `**-> Online:** ${members.filter(member => member.presence.status == `online`).size}`,
        `**-> idle:** ${members.filter(member => member.presence.status == `idle`).size}`,
        `**-> Do Not Disturb:** ${members.filter(member => member.presence.status === 'dnd').size}`,
        `**-> Offline:** ${members.filter(member => member.presence.status == `offline`).size}`,
        '\u200b'
    ])

    .addFields(
        {name: '🌐 Servers', value: `${bot.user.username} is active on ${bot.guilds.cache.size} servers.`},
        {name: '☢ Ping', value: `${Math.round(bot.ws.ping)}ms`},
        {name: '♻ Join Data', value: bot.user.createdAt},
        {name: '🏃‍♂️ Specs Info', value: `Cores: ${os.cpus().length}`}

    )
    .setFooter(`© created by philippe#0354`)


    return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "serverinfo"
}