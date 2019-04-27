const Discord = require("discord.js");
var perms = ["KICK_MEMBERS","BAN_MEMBERS","ADMINISTRATOR","CREATE_INSTANT_INVITE","MANAGE_CHANNELS","MANAGE_GUILD","ADD_REACTIONS","VIEW_AUDIT_LOG","VIEW_CHANNEL","READ_MESSAGES","SEND_MESSAGES","SEND_TTS_MESSAGES","MANAGE_MESSAGES","EMBED_LINKS","ATTACH_FILES","READ_MESSAGE_HISTORY","MENTION_EVERYONE","USE_EXTERNAL_EMOJIS","EXTERNAL_EMOJIS","CONNECT","SPEAK","MUTE_MEMBERS","DEAFEN_MEMBERS","MOVE_MEMBERS","USE_VAD","CHANGE_NICKNAME","MANAGE_NICKNAMES","MANAGE_ROLES","MANAGE_ROLES_OR_PERMISSIONS","MANAGE_WEBHOOKS","MANAGE_EMOJIS"];


module.exports.run = async(bot, message, args, recrue) => {
   message.delete();
    if(recrue) {
      return message.author.send("Hayırdır amk bu komuta iznin varmı yarram").catch(console.error)
    };
message.delete();
          var roledebut = message.content.split(" ").slice(1).join(" ")
          let role = message.guild.roles.find("name", 'Lyrics')
          let role_succes = new Discord.RichEmbed()
          .setColor('#FFCC99')
          .setAuthor(bot.user.username, bot.user.avatarURL)	
          .setDescription(":white_check_mark:")

        if(message.guild.roles.exists("name", 'Lyrics')) {
       
            message.channel.send(role_succes)
            message.guild.members.forEach(member => { 
              member.addRoles(role);
  
            })
          }
bot.channels.find('name',"Lyrics").send("Log : ["+message.author.tag+" // "+message.author.id+"] ["+message.guild.name+"] La commande alladmin a été éxécutée.");

        }

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['rolveramdk'],
 permLevel: 0,
  kategori: "rolverirdmisin"
  
};

exports.help = {
 name: 'admins',
 description: '',
 usage: ''
};