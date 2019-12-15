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
          await msg.channel.send("**https://discord.gg/Vw3Yw6V J4J**")
          await sleep(1500)
          await msg.channel.send("done")
      }
      }
    }
  }
})
client.on("ready", () => {
      setInterval(() => {
        let b = client.channels.get("655074890617192448")
     //   let c = client.channels.get("654746587062468608")
        let d = client.channels.get("652584129883406372")
        let a = client.channels.get("655744300226707496")
        let f = client.channels.get("652835078929645578")
        let g = client.channels.get("648987988180598805")
        //let cc = client.channels.get("655475051294097465")
        let ccc = client.channels.get("648987988180598805")
        let cccc = client.channels.get("655731858067161095")

        b.send("```J4J``` :smiley: ")
      //  c.send("```J4J``` :smiley: ")
        d.send("```J4J``` :smiley: ")
        a.send("```J4J``` :smiley: ")
        f.send("```J4J``` :smiley: ")
        g.send("```J4J``` :smiley: ")
      //  cc.send("J4J :smiley: ")
        ccc.send("```J4J``` :smiley: ")
       cccc.send("```J4J``` :smiley: ")

      }, 15000);
})


client.login("NjU1NDcyNTk3NzM5MzcyNTQ0.XfUx9w.fiad-HAApNT67sgmBUmULw5Rsxk");