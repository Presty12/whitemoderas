const Discord = require("discord.js");

exports.run = async (client, message, args) => {

if (!message.member.voice.channel) {
return message.reply("Ses kanalında olmalısınız");
}
const filter = (reaction, user) => {
return ['✅', '❌'].includes(reaction.emoji.name) && user.id === kullanıcı.id;
};
  
let kullanıcı = message.mentions.members.first()
if (!kullanıcı) return message.channel.send('Bir kullanıcı belirtin');

let member = message.guild.member(kullanıcı);

if (!member.voice.channel) return message.channel.send('Etiketlenen kullanıcı herhangi bir ses kanalında bulunmuyor').then(m => m.delete,{timeout: 5000});

const voiceChannel = message.member.voice.channel.id;
if (!voiceChannel) return;
  
let log = new Discord.MessageEmbed()
.setColor("RANDOM")
.setDescription(`${kullanıcı}, ${message.author} seni \`${message.member.voice.channel.name}\` adlı odaya çekmek istiyor. Kabul ediyor musun ?`)
  
let mesaj = await message.channel.send(log)
await mesaj.react("✅")
await mesaj.react("❌")
mesaj.awaitReactions(filter, {
max: 1,
time: 60000,
errors: ['time']
}).then(collected => {
const reaction = collected.first();
if (reaction.emoji.name === '✅') {
let kabul = new Discord.MessageEmbed()
.setColor("RANDOM")
.setDescription(`${kullanıcı} Odaya Çekilme Teklifini Onayladı`)
message.channel.send(kabul)
kullanıcı.voice.setChannel(message.member.voice.channel.id)
} else {
let striga = new Discord.MessageEmbed()
.setColor("RANDOM")
.setDescription(`${kullanıcı} Odaya Çekilme Teklifini Reddetti`)
message.channel.send(striga)
}
})
}


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["gel"],
  permLevel: 0,
}

exports.help = {
  name: 'çek'
  
}