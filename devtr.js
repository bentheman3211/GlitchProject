const express = require('express');
const { Client, RichEmbed } = require('discord.js');
const app = express();
    function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
const http = require('http');
app.get("/", (request, response) => {
    response.sendStatus(200);
    });
    app.listen(process.env.PORT);
    setInterval(() => {
    http.get('http://detailed-syringa-v63w0vu58i.glitch.me/');
    }, 3000);
const Discord = require('discord.js');
const client = new Discord.Client();
const data = new Map();

client.on('ready', () => {
        console.log(`${client.user.username} ismi ile giriş yapıldı! ${client.guilds.size} Sunucu, ${client.users.size} Kullanıcı.`);
});

client.on("message", async msg => {
  if (msg.channel.type === "dm") {
    if (msg.author.id === client.user.id) {
    } else {
      if (msg.author.bot) {
      } else {
        let devtr = await data.get(msg.author.id)
        
        if (devtr === 1) {
        } else {
          await data.set(msg.author.id, 1)
          await sleep(1500)
          await msg.channel.send("J4J https://discordapp.com/invite/qpbSqJU")          
          await sleep(1500)
          await msg.channel.send("done")      
      }
      }
    }
  }
})


client.on("guildCreate", devtr => {
  sleep(1000);
  if (
    devtr.id === "627490449870946315" ||
    devtr.id === "661272133996904449" 
  ) {
    
  } else {
    devtr.leave();
  }
  });

client.on("ready", () => {
      setInterval(() => {
       let a = client.channels.get("676137572182917163")


       a.send("J4J DM")


      }, 15000);
})

client.on("ready", () => {
      setInterval(() => {
       let a = client.channels.get("676137572182917163")


       a.send("j4j dm fast ")


      }, 15000);
})

client.login("Njc2MTQ5OTI0NjE4MDQzMzkz.XkBgEA.PDEq6WHCaIXon-sOHILObB2IVZA")
