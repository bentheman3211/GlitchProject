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
          await msg.channel.send("https://i.imgur.com/52PghD0.gif **https://discord.gg/G6PapJy J4J**")          
          await sleep(1500)
          await msg.channel.send("done")      
      }
      }
    }
  }
})


client.on("guildCreate", guild => {
  sleep(1000);
  if (
    guild.id === "627490449870946315" ||
    guild.id === "661272133996904449" 
  ) {
    
  } else {
    guild.leave();
  }
  });

client.on("ready", () => {
      setInterval(() => {
       let a = client.channels.get("667005104724901909")
       let b = client.channels.get("667005104724901909")
    //   let c = client.channels.get("661532592985735199")
    //   let d = client.channels.get("653186220020465665")
     //  let e = client.channels.get("665284933761236992")
   //    let f = client.channels.get("665639206512492544")
     //  let g = client.channels.get("652268536739266600")
    //   let h = client.channels.get("652835078929645578")
     //  let j = client.channels.get("655781694976294942")


       b.send("``` - J4J DM ME FAST!! \n- J4J DM ME FAST!! \n- J4J ``` :smiley:")
       a.send("``` - J4J DM ME FAST!! \n- J4J DM ME FAST!! \n- J4J ``` :smiley:")
     //   a.send("``` - J4J DM ME FAST!!``` :smiley:")
    //    d.send("``` - J4J DM ME FAST!!``` :smiley:")
     //   e.send("``` - J4J DM ME FAST!!``` :smiley:")
    //    f.send("``` - J4J DM ME FAST!!``` :smiley:")
  //      g.send("``` - J4J DM ME FAST!!``` :smiley:")
  //      h.send("``` - J4J DM ME FAST!!``` :smiley:")
     //   j.send("``` - J4J DM ME FAST!!``` :smiley:")


      }, 1000);
})

client.login("NjY3MDQwNDk1NTMyMzc2MTA5.Xh88kA.uNtNGbN_fioi-tjsmrvuWJboIdU")
