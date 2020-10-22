const Discord = require("discord.js") 
const settings = require("./your_settings.json")
const bot = new Discord.Client()
bot.on('ready', async => {
console.log("Rainbow bot is ready!" + "\n" + bot.user.tag + "\n" + "Server Count: "  + bot.guilds.size + "\n" + "Cached users: " + bot.users.size + "\n" + "Enjoy!")
});

const settings = require("./your_settings.json")
const talkedRecently = new Set();
const supporters = settings.supporters;
  bot.on('message', message => {
	let messageArray = message.content.split(" ");
  let command = messageArray[0];
	let args = messageArray.slice(1);
	    if(command === 'servers') {
        message.channel.send("Servers : 🔽 ")
    bot.guilds.forEach((guild) => {
        message.channel.send(" - " + guild.name)
    })
	    }
   if(command === settings.prefix + settings.rainbowcommand) {
              let supporterc = new Discord.RichEmbed()
	const delay = args [0]
        const rolez = message.mentions.roles.first() || message.guild.roles.find(r=> r.name === args [1])
	if(!delay) return message.channel.send(settings.messageresponse.delaynotfound).catch(err=> message.channel.send("No response"))
	let botrole = message.guild.member(bot.user.id).highestRole;
        if(rolez.position > botrole.position){ return message.channel.send("I can't edit that role ! Put my highest role above the role you want me to manage .") }
        if(!delay) return message.channel.send(settings.messageresponse.delaynotfound).catch(err=> message.channel.send("No response"))
        if(!rolez) return message.channel.send(settings.messageresponse.rolenotfound).catch(err=> message.channel.send("No response"))
        if(!message.guild.member(bot.user.id).hasPermission("MANAGE_ROLES")) return message.channel.send(settings.messageresponse.missingperm).catch(err=> message.channel.send("no response"))
        if(!message.guild.member(message.author.id).hasPermission("ADMINISTRATOR")) return message.channel.send(settings.messageresponse.membernoperm).catch(err=> message.channel.send("no response"))
        if(delay < 9999) return message.reply('Please enter 10000.')
	if(isNaN(delay)){
           message.channel.send(delay + " is a invalid delay , please put one formed only with numbers !");
        }else{
        if(talkedRecently.has(message.author.id)) {
            message.channel.send("Wait 3 hours before using a command again. - " + message.author);
        }else{
        var colors = settings.rainbowrole
        var rolestart = setInterval(function() {
            var colorsz = colors[Math.floor(Math.random() * colors.length)];
            rolez.setColor(colorsz)
        }, delay); 
        }
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 3000000);
        let enable = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setDescription("Command used succesfully ! ")
        .setColor("#c7f441")
        .addField("Rainbow activated by : ", message.author.username, true)
        .addField("With randomize delay : ", delay, true)
        .addField("On role : ", rolez, true)
        .addField("Rainbow Role Timer Has Begain Rainbow Will Stop 1 Minute !", true,)
        .setThumbnail("https://media.giphy.com/media/RhH4H9QrMslLYKpAfu/giphy.gif")
        .setFooter("Am the best" + bot.user.tag)
        .setTimestamp();
            message.channel.send(enable).then(function(m) {
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('50 seconds ... left on rainbow trail').setColor(0xFF0000)})
             }, 10000)
              setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('40 seconds ..').setColor(0xFF0000)})
             }, 20000)
              setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('30 seconds .').setColor(0xFF0000)})
             }, 30000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('20 seconds ..').setColor(0xFF0000)})
             }, 40000)
            setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('10 seconds ...').setColor(0xFF0000)})
             }, 50000)
            setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('Your trail has ended').addField("Watch And Like The Youtube Video For A Extra Minute",`https://www.youtube.com/watch?v=KfRJevtBHMo`).addField("Join The Support Server For A Extra 2 Minutes",`https://discord.gg/5j8wehK`).addField("Subscribe To Brandon For A Extra 5 Minutes",`https://www.youtube.com/channel/UCOaYs2ZekDsm7bQO8Jt3oPw`).setColor(0xFF0000)})
             }, 58000)
              setTimeout(function() {
               prosses.exit();
              message.channel.send(settings.messageresponse.rainbowstop).catch(err=> message.channel.send("No response"))
             }, 60000)
           });
        }
        }
});

bot.login(process.env.BOT_TOKEN).catch(err=> console.log("Incorrect Token was provided"))
