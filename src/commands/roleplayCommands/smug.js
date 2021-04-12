module.exports = {
name: 'smug',
cooldown: 2,
permissions: ["sendMessages", "embedLinks"],
async execute(Yui, message, args) {
const misc = require('../../utils/misc.js')
const image = await misc.jsonData('../assets/json/roleplay.json', 'smug')
message.channel.createMessage({ embed: { author: { name:`${message.author.username} has a smug look`, icon_url: message.author.avatarURL, url: image }, color: 0x0ffff, image: {url: image }}});
}}