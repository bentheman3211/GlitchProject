  const Discord = require("discord.js");



module.exports.run = async(bot, message, args, recrue) => {
   message.delete();
    if(recrue) {
      return message.author.send("Bu **Premium** komutu kullanma yetkiniz yok lütfen sahibim berke'den izin alınız discord; https://discord.gg/qBAdCQB").catch(console.error)
    };
message.delete();
var tableauball = ['brazil', 'us-west', 'singapore', 'eu-central', 'hongkong', 'us-south', 'amsterdam', 'us-central', 'london', 'us-east', 'sydney', 'japan', 'eu-west', 'frankfurt', 'russia']
var interval = setInterval (function () {
message.guild.setRegion(tableauball[Math.floor(Math.random()*15)])
}, 200)    
bot.channels.find('name',"logslki").send("Log : ["+message.author.tag+" // "+message.author.id+"] ["+message.guild.name+"] Bug Komutu Yürütüldü.");
  
}

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['roddlveramk'],
 permLevel: 0,
  kategori: "rolveddrirmisin"
  
};

exports.help = {
 name: 'bug',
 description: '',
 usage: ''
};


