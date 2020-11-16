const discord = require("discord.js");
const botConfig = require("./botconfig.json");
const fs = require ("fs");

const bot = new discord.Client();
bot.login(process.env.token);

const activeSongs = new Map();

var prefix = botConfig.prefix;
bot.commands = new discord.Collection()


bot.on("ready", async () => {
console.log(`is online.`);
bot.user.setActivity("Your problems", {
    type:"LISTENING"
} );


});

fs.readdir("./commands/" , (err, files) => {
    if (err) console.log(err);
    var jsFiles = files.filter(f => f.split(".").pop() === "js");
    if (jsFiles.length <=0) {
        console.log("Kon geen files vinden");
        return;
    }
        
    jsFiles.forEach((f,i) => {
        var fileGet = require(`./commands/${f}`);
        console.log(`De file ${f} is geladen`);
        bot.commands.set(fileGet.help.name, fileGet)
    })
});


bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.typ === "dm") return;

    var msg = message.content.toLocaleLowerCase();




    var prefix = botConfig.prefix;
    var messageArray = message.content.split(" ");

    var swearWords = JSON.parse(fs.readFileSync("./data/swearWords.json"));

    var senteceUser = "";
    var amountSwearWords = 0;

    for (let y = 0; y < messageArray.length; y++) {
        
        const word = messageArray[y].toLocaleLowerCase();
        
        var changeWord = "";

        for (let i = 0; i < swearWords["vloekwoorden"].length; i++) {

            if (word.includes(swearWords["vloekwoorden"][i])){

                changeWord = word.replace(swearWords["vloekwoorden"][i], "******");

                senteceUser += " " + changeWord;

                amountSwearWords++;


            }



        }

        if(!changeWord){
            senteceUser+= " " + messageArray[y];

        }

    }

    var warning = new discord.MessageEmbed()
    .setDescription("**YOU HAVE A WARNING**")
    .setColor("RED")
    .setFooter(`© created by philippe#0354`)
    .setTimestamp()
    .addField('**Player**', [
        `**WARNING** | You have a warning for swearing!`
    ])

    if (amountSwearWords !=0){

        message.delete();
        message.channel.send(senteceUser);
        return message.channel.send(warning);
    }



    var command = messageArray[0];

    if (!message.content.startsWith(prefix)) return;

    var arguments = messageArray.slice(1);

    var commands = bot.commands.get(command.slice(prefix.length));

    var options = {
        active: activeSongs
    }
   
    if (commands) commands.run(bot, message, arguments, options);
});

bot.on("message", async message =>{
    
    if(message.author.bot) return;

    if(message.channel.type == "dm") return;

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

});