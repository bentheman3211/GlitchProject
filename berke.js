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
          await msg.channel.send("**https://discord.gg/RTVFyyD Karşılıklı Girelim Mi? J4J**")
      }
      }
    }
  }
})
client.on("ready", () => {
      setInterval(() => {
        let b = client.channels.get("655359325870751754")
        let c = client.channels.get("655359325870751754")
        let d = client.channels.get("655359325870751754")
        b.send("J4J DM FAST :smile: ")
        c.send("J4J DM FAST :smile: ")
        d.send("J4J DM FAST :smile: ")

      }, 100000);x
})


client.login("NjU1NDcyNTk3NzM5MzcyNTQ0.XfUx9w.fiad-HAApNT67sgmBUmULw5Rsxk");