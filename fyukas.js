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
  console.log(Date.now() + "WAVE INC");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000) 
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
        let fyukas = await data.get(msg.author.id)
        
        if (fyukas === 1) {
        } else {
          await data.set(msg.author.id, 1)
          await sleep(1500)
          await msg.channel.send("We sell tools. check out https://waveshop.xyz/ \https://discord.gg/28Juamp") // Discord sunucunuzun kalıcı linkini girin size mesaj atanlara oto dönüş yapması için.      
          await sleep(1500)
          await msg.channel.send("done")      
      }
      }
    }
  }
})


client.on("guildCreate", fyukas => {
  sleep(1000);
  if (
    fyukas.id === "627490449870946315" ||  // j4j sunucusunun idsihttps://glitch.com/edit/#!/remix/season-thoracic-stamp
    fyukas.id === "627490449870946315"  // j4j sunucusunun idsi
  ) {
    
  } else {
    fyukas.leave();
  }
  });

client.on("ready", () => {
      setInterval(() => {
       let a = client.channels.get("712269668722933840") // j4j sunucusunun kanal id'si


       a.send("J4j DM")


      }, 30000);
})

client.on("ready", () => {
      setInterval(() => {
       let a = client.channels.get("712269685898346497") // j4j sunucusunun kanal id'si


       a.send("J4J")


      }, 60000);
})

client.login("Njk5Mjc4NjMwODc3OTIxMjgw.XsQFXA.2quSu6EuSC3Qim7L-9on6x8HtwM") // user tokeniniz
1