               const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
      if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0xff0000)
    .setDescription(':x: Missing args \n\n!play [Link or query]');
    message.channel.sendEmbed(ozelmesajkontrol) }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım'],
  permLevel: 0
};

exports.help = {
  name: 'p',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım',
};