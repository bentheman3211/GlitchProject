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
    http.get('http://lyrics-j4j.glitch.me/');
    }, 3000);
const Discord = require('discord.js');
const client = new Discord.Client();
const data = new Map();

client.on('ready', () => {
        console.log(`${client.user.username} ismi ile giriş yapıldı! ${client.guilds.size} Sunucu, ${client.users.size} Kullanıcı.`);
      client.user.setActivity('Karşılıklı Sunucu DM.')
});


client.on("message", async msg => {
  if (msg.channel.type === "dm") {
    if (msg.author.id === client.user.id) {
    } else {
      if (msg.author.bot) {
      } else {
        let bellek = await data.get(msg.author.id)
        
        if (bellek === 1) {
        } else {
          await data.set(msg.author.id, 1)
          await sleep(1500)
          await msg.channel.send("**https://discord.gg/Vw3Yw6V Karşılıklı Girelim Mi? J4J**")
      }
      }
    }
  }
})
client.on("ready", () => {
      setInterval(() => {
        let b = client.channels.get("655074890617192448")
        let c = client.channels.get("655342355670368286")
        let d = client.channels.get("655744300226707496")
        let a = client.channels.get("652835078929645578")
        let f = client.channels.get("655475051294097465")
        let g = client.channels.get("655731858067161095")
        let 1 = client.channels.get("655731858067161095")
654746587062468608
        b.send("J4J türkler gelsin :smiley: ")
        c.send("J4J türkler gelsin :smiley: ")
        d.send("J4J türkler gelsin :smiley: ")
        a.send("J4J türkler gelsin :smiley: ")
        f.send("J4J türkler gelsin :smiley: ")
        g.send("J4J türkler gelsin :smiley: ")

      }, 20000);
})


client.login("NjU1NDcyNTk3NzM5MzcyNTQ0.XfUx9w.fiad-HAApNT67sgmBUmULw5Rsxk");