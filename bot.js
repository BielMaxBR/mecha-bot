const { Client } = require("discord.js")
const { existsSync } = require("fs")
const client = new Client()
const prefix = 'M'

client.on('ready', ()=>{
  console.log('bot iniciado')
  
  console.log(client.guilds.cache)
  client.user.setActivity('mecha bot na área', 'COMPETING')
  let activities = [
    "amogus",
    "minescrefts",
    "fogo gratis",
    "tretris",
    "robrox",
    "bosta pela janela"
  ]
  i = 0;
  setInterval(() => client.user.setActivity(`${activities[i++ % activities.length]}`), 10000);
})

client.on('message',message => {
  const content = message.content
  if (!content.startsWith(prefix) || message.author.bot) return;
  
  const args = content.slice(prefix.length).trim().split(' ');
  const command = args.shift().toLowerCase();
  const path = `./commands/${command}.js`
  if (existsSync(path)) {
    require(path)({client,message,args})
  }
})

module.exports =  client
