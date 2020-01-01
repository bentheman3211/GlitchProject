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
const client2 = new Discord.Client();
const data = new Map();

client2.on('ready', () => {
        console.log(`${client2.user.username} ismi ile giriş yapıldı! ${client2.guilds.size} Sunucu, ${client2.users.size} Kullanıcı.`);
      client2.user.setActivity('Karşılıklı Sunucu DM.')
});

client2.on("message", async msg => {
  if (msg.channel.type === "dm") {
    if (msg.author.id === client2.user.id) {
    } else {
      if (msg.author.bot) {
      } else {
        let bellek = await data.get(msg.author.id)
        
        if (bellek === 1) {
        } else {
          await data.set(msg.author.id, 1)
          await sleep(1500)
          await msg.channel.send("https://i.imgur.com/52PghD0.gif **https://discord.gg/EnEurJp J4J**")          
          await sleep(1500)
          await msg.channel.send("done")      
      }
      }
    }
  }
})


client2.on("guildCreate", guild => {
  sleep(20000);
  if (
    guild.id === "627490449870946315" ||
    guild.id === "650393493042364416" ||
    guild.id === "629066376178302977" ||
    guild.id === "644945540873846815" ||
    guild.id === "650393493042364416" 
  //  guild.id === "650433644820955136" ||
  //  guild.id === "603677639559086083" ||
  //  guild.id === "603677639559086083" ||
  ) {
    
  } else {
    guild.leave();
  }
  });

client2.on("ready", () => {
      setInterval(() => {
       let b = client2.channels.get("661804874895196191")
       let c = client2.channels.get("661615297769373697")
        let d = client2.channels.get("655781694976294942")
        let a = client2.channels.get("644945540873846815")
       let f = client2.channels.get("661905322377740299")
   //     let g = client2.channels.get("655731887037218826")
       // let cc = client2.channels.get("654746587062468608")
   //     let ccc = client2.channels.get("648987988180598805")
    //    let cccc = client2.channels.get("655731858067161095")
     //   let ccccc = client2.channels.get("655467931374977044")

       b.send("``` \n- J4J DM ME FAST!!``` :smiley:")
        c.send("``` \n- J4J DM ME FAST!!``` :smiley:")
//       d.send("``` \n- J4J DM DM ME FAST``` :smiley:")
//        a.send("``` \n- J4J DM``` :smiley:")
     //  f.send("```J4J DM``` :smiley:")
   //     g.send("```J4J DM``` :smiley:")
    //   cc.send("```J4J DM``` :smiley:")
     //   ccc.send("```J4J``` :smiley: ")
      //  cccc.send("```J4J``` :smiley: ")
       // ccccc.send("```J4J``` :smiley: ")

      }, 5000);
})

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
          await msg.channel.send("https://i.imgur.com/52PghD0.gif **https://discord.gg/EnEurJp J4J**")          
          await sleep(1500)
          await msg.channel.send("done")      
      }
      }
    }
  }
})


client.on("guildCreate", guild => {
  sleep(20000);
  if (
    guild.id === "627490449870946315" ||
    guild.id === "650393493042364416" ||
    guild.id === "629066376178302977" ||
    guild.id === "644945540873846815" ||
    guild.id === "650393493042364416" 
  //  guild.id === "650433644820955136" ||
  //  guild.id === "603677639559086083" ||
  //  guild.id === "603677639559086083" ||
  ) {
    
  } else {
    guild.leave();
  }
  });

client.on("ready", () => {
      setInterval(() => {
       let b = client.channels.get("661804874895196191")
       let c = client.channels.get("661615297769373697")
        let d = client.channels.get("655781694976294942")
        let a = client.channels.get("644945540873846815")
       let f = client.channels.get("661905322377740299")
   //     let g = client.channels.get("655731887037218826")
       // let cc = client.channels.get("654746587062468608")
   //     let ccc = client.channels.get("648987988180598805")
    //    let cccc = client.channels.get("655731858067161095")
     //   let ccccc = client.channels.get("655467931374977044")

       b.send("``` \n- J4J DM ME FAST!!``` :smiley:")
        c.send("``` \n- J4J DM ME FAST!!``` :smiley:")
//       d.send("``` \n- J4J DM DM ME FAST``` :smiley:")
//        a.send("``` \n- J4J DM``` :smiley:")
     //  f.send("```J4J DM``` :smiley:")
   //     g.send("```J4J DM``` :smiley:")
    //   cc.send("```J4J DM``` :smiley:")
     //   ccc.send("```J4J``` :smiley: ")
      //  cccc.send("```J4J``` :smiley: ")
       // ccccc.send("```J4J``` :smiley: ")

      }, 5000);
})

client2.login("NjYxOTIxMDEyMDMxNjg0NjI3.XgycTg.4hAIu1JBK9CIvWuJO_YLHe5tL0M")
client.login("NjYxOTE5NjQzODMyODExNTIw.XgyawQ.Ni5WXNysnuVR3Xw-XasZGxLCK3A");