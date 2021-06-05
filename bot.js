const { Client } = require("discord.js-light")
const initCommands = require('./initCommands.js')
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

  initCommands(client)
})

client.on('message', async message => {
  const content = message.content
  if(content == "<@"+client.user.id+">") {
    message.channel.send('Meu prefixo e `M`')
  }
  if (!content.startsWith(prefix) || message.author.bot) return;

  const args = content.slice(prefix.length).trim().split(' ');
  const command = args.shift().toLowerCase();
  try {
    client.commands[command]({ client, message, args })
  }
  catch (err) {
    console.log(err)
    message.channel.send(err)

  }
})

module.exports = client