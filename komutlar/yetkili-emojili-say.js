const Discord = require("discord.js");
const { oneLine, stripIndents } = require('common-tags');
module.exports.run = async (client, message, args) => {

if(!["798562334107762717"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new Discord.MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL()({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));

let guild = "798562334053367828"; // SUNUCU ID
const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
let count = 0;
for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
var msg = message;
var üyesayısı = msg.guild.members.cache.size.toString().replace(/ /g, "    ")
var üs = üyesayısı.match(/([0-9])/g)
üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs) {
üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
return {
0: "<a:0_:799270824934244372>",
    1: "<a:1_:799270824897020006>",
    2: "<a:2_:799270825651863593>",
    3: "<a:3_:799270827203231746>",
    4: "<a:4_:799270828067127337>",
    5: "<a:5_:799270827312807946>",
    6: "<a:6_:799270828759580692>",
    7: "<a:7_:799270828302532628>",
    8: "<a:8_:799270829267222528>",
    9: "<a:9_:799270829338263552>"}[d];})}
  
  
var sessayı = count.toString().replace(/ /g, "    ")
var üs2 = sessayı.match(/([0-9])/g)
sessayı = sessayı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs2) {
sessayı = sessayı.replace(/([0-9])/g, d => {
return {
0: "<a:0_:799270824934244372>",
    1: "<a:1_:799270824897020006>",
    2: "<a:2_:799270825651863593>",
    3: "<a:3_:799270827203231746>",
    4: "<a:4_:799270828067127337>",
    5: "<a:5_:799270827312807946>",
    6: "<a:6_:799270828759580692>",
    7: "<a:7_:799270828302532628>",
    8: "<a:8_:799270829267222528>",
    9: "<a:9_:799270829338263552>"}[d];})}

var taglılar = 0;
let tag = "❋";
message.guild.members.cache.forEach(member => {
if(member.user.username.includes(tag)) {
taglılar = taglılar+1}})

var taglılar = taglılar.toString().replace(/ /g, "    ")
var üs3 = taglılar.match(/([0-9])/g)
taglılar = taglılar.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs3) {
taglılar = taglılar.replace(/([0-9])/g, d => {
return {
0: "<a:0_:799270824934244372>",
    1: "<a:1_:799270824897020006>",
    2: "<a:2_:799270825651863593>",
    3: "<a:3_:799270827203231746>",
    4: "<a:4_:799270828067127337>",
    5: "<a:5_:799270827312807946>",
    6: "<a:6_:799270828759580692>",
    7: "<a:7_:799270828302532628>",
    8: "<a:8_:799270829267222528>",
    9: "<a:9_:799270829338263552>"}[d];})}

  
  
  
var cevirimici = message.guild.members.cache.filter(m => m.presence.status !== "offline").size.toString().replace(/ /g, "    ")
var üs4= cevirimici.match(/([0-9])/g)
cevirimici = cevirimici.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs4) {
cevirimici = cevirimici.replace(/([0-9])/g, d => {
return {
0: "<a:0_:799270824934244372>",
    1: "<a:1_:799270824897020006>",
    2: "<a:2_:799270825651863593>",
    3: "<a:3_:799270827203231746>",
    4: "<a:4_:799270828067127337>",
    5: "<a:5_:799270827312807946>",
    6: "<a:6_:799270828759580692>",
    7: "<a:7_:799270828302532628>",
    8: "<a:8_:799270829267222528>",
    9: "<a:9_:799270829338263552>"}[d];})}

  
  
  
var booster = message.guild.roles.cache.get("798562334099505202").members.size
var booster = booster.toString().replace(/ /g, "    ")
var üs5 = booster.match(/([0-9])/g)
booster = booster.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs5) {
booster = booster.replace(/([0-9])/g, d => {
return {
0: "<a:0_:799270824934244372>",
    1: "<a:1_:799270824897020006>",
    2: "<a:2_:799270825651863593>",
    3: "<a:3_:799270827203231746>",
    4: "<a:4_:799270828067127337>",
    5: "<a:5_:799270827312807946>",
    6: "<a:6_:799270828759580692>",
    7: "<a:7_:799270828302532628>",
    8: "<a:8_:799270829267222528>",
    9: "<a:9_:799270829338263552>"}[d];})}


  
const embed1 = new Discord.MessageEmbed()
.setColor('RANDOM')
.setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
 .setDescription(`
White Power'da toplam ${üyesayısı} üye bulunmakta.
Tagımızda toplam ${taglılar} üye bulunmakta.
Toplam ${booster} booster üye bulunmakta.
Ses kanallarında toplam ${sessayı} üye bulunmakta.`)

msg.channel.send(embed1);
  
  }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["total",'toplam','say','info'],
  permLevel: 0
};
exports.help = {
  name: 'say'
}