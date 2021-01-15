const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {

//-------------------------------------------------------------------------------\\

if(!["798562334107762717"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new Discord.MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('RANDOM').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));

//-------------------------------------------------------------------------------\\
  
  
  let shina = "**Sesli Kanalda Olan Yetkililer:**\n";
  let shina2 = "**Sesli Kanalda Olmayan Yetkililer:**\n";
  message.guild.roles.cache.get("798562334116937768").members.map(r => {
    shina += r.voice.channel ? "•  <@" + r.user.id + ">\n" : "";
    shina2 += !r.voice.channel ? "•  <@" + r.user.id + ">\n" : "";
  });

  const shinaembed = new Discord.MessageEmbed()
    .setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))
    .setColor("RANDOM")
    .setTimestamp()
    .setDescription("" + shina + "" + shina2 + "")
  message.channel.send(shinaembed).then(s => s.s);
};
module.exports.conf = {
  aliases: ["sesli"]
};

module.exports.help = {
  name: "sesteki-yetkililer"
};