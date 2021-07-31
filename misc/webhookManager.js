async function criarHook(channel) {
    const hook = await channel.createWebhook('crossover-bot', {
        avatar: 'https://i.pinimg.com/originals/d7/96/3b/d7963b33fec9c7eea90be6cc52bc0c06.png',
    })
    return hook
}

async function pegarHook(channel) {
    const hooks = await channel.fetchWebhooks()

    for (var hook of hooks.values()) {
        if (hook.name == "crossover-bot") {
            return hook
        }
    }
    return null
}

async function remoteRun(client, message) {
    if (!client.remoteList || message.author.bot) return

    const remoteList = client.remoteList

    for (const serverId of Object.keys(remoteList)) {
        const channelId = remoteList[serverId]

        if (serverId == message.guild.id) return

        const server = client.guilds.cache.get(serverId)
        const channel = server.channels.cache.get(channelId)

        const avatarURL = message.author.avatarURL()
        const username = message.author.username+" <"+message.guild.name+">"

        const hook = await pegarHook(channel)
        
        hook.send(message.content,{
            avatarURL,
            username
        })
    }
}

module.exports = {
    pegarHook,
    criarHook,
    remoteRun
}