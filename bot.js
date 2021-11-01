const { remoteRun } = require("./misc/webhookManager.js")

const { Client } = require("discord.js")
const initCommands = require('./initCommands.js')
const MusicConfig = require("./musica/MusicConfig.js")
const client = new Client({
    cacheGuilds: true,
    cacheChannels: true,
    cacheOverwrites: true,
    cacheRoles: true,
    cacheEmojis: true,
    cachePresences: true
})
const prefix = "M"

client.on('ready', () => {
    console.log('bot iniciado')

    client.user.setActivity('mecha bot na área', 'COMPETING')

    client.music = new MusicConfig(client)
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

    remoteRun(client, message)
    
    if (message.content == `<@!${client.user.id}>` || message.content == `<@${client.user.id}>` ) {
        message.channel.send('Meu prefixo é **M**')
    }

    if (content.toLowerCase().indexOf('ceira') != -1) {
        message.react('🇨').then(() => {
            message.react('🇪').then(() => {
                message.react('🇮').then(() => {
                    message.react('🇷').then(() => {
                        message.react('🇦')
                    })
                })
            })
        })
    }


    if (!content.startsWith(prefix) || message.author.bot) return;

    const args = content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();
    try {
        if (client.commands[command]) {
            client.commands[command]({ client, message, args })
        }
    }
    catch (err) {
        console.log(err)
        message.channel.send(err)

    }
})

module.exports = client
