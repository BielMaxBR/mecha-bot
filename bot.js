const { Client } = require("discord.js-light")
const { existsSync, opendir, readdir } = require("fs")
const client = new Client({
  cacheGuilds: true,
  cacheChannels: true,
  cacheOverwrites: false,
  cacheRoles: false,
  cacheEmojis: false,
  cachePresences: false
})
const prefix = 'M'

client.on('ready', () => {
  console.log('bot iniciado')

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

client.on('message', message => {
  const content = message.content
  if (!content.startsWith(prefix) || message.author.bot) return;

  const args = content.slice(prefix.length).trim().split(' ');
  const command = args.shift().toLowerCase();
  const dirs = opendir('./commands')
  for(let dir of dirs) {
    message.channel.send(dir)
  }
  /*const path = `./commands/${command}.js`
  if (existsSync(path)) {
    try {
      require(path)({ client, message, args })
    }
    catch (err) {
      console.log(err)
      message.channel.send(err)
    }
  }*/
})

module.exports = client