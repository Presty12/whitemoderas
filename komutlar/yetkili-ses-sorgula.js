const { MessageEmbed } = require("discord.js");
module.exports.run = async (client, message, args) => {
//-------------------------------------------------------------------------------\\
  
if(!["798562334107762717"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('RANDOM').setAuthor(message.member.displayName, message.author.avatarURL()({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));

//-------------------------------------------------------------------------------\\  
  
  
let shina;
let shina1 = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
let shina2 = message.guild.members.cache.get(args[0]);
if(!shina1) return message.channel.send(new MessageEmbed().setTimestamp().setColor('RANDOM').setDescription(`Bir ID Girmelisin Veya Kullanıcı Etiketlemelisin`))
if (shina1) {
shina = shina1;
}
if (shina2) {
shina = shina2;
}
if (!shina) {
shina = message.member;
}
let ses = shina.voice.channel;
if (!ses) {
message.channel.send(new MessageEmbed().setColor('RANDOM').setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setDescription("**<@"+shina.id+"> Adlı kullanıcı harhangi bir ses kanalında değil.**"));
}
if (ses) {
message.channel.send(new MessageEmbed().setColor('RANDOM').setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setDescription(
"**<@"+shina.id+"> Adlı kullanıcı `"+ses.name+"` adlı kanalda bulunuyor**"
));
}};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["n"],
    permLevel: 0,
    name: "n"
  }
  
  exports.help = {
    name: "kontrol"
  };
  
  