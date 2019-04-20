const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
 message.channel.send({embed: {
		  file:"https://media.giphy.com/media/4WF5qwNqPPFbbI31qB/giphy.gif",
          color: 0xD97634,
		  description: ""
            }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p'],
  permLevel: 0
};

exports.help = {
  name: '2019',
  description: 'Türk bayrağı Gôsterir',
  usage: 'bayrak'
};
