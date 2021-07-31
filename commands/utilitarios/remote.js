const { pegarHook, criarHook } = require("../../misc/webhookManager.js")

module.exports = async ({ client, message, args }) => {
    const command = args[0].toLowerCase()

    let args2 = args.slice(1,args.length-1)
    switch (command) {
        case "connect":
            if (!client.remoteList) client.remoteList = {}

            const channel = args2[0] || message.channel.id
            client.remoteList[message.guild.id] = channel

            if (!await pegarHook(channel)) {
                const hook = await createHook(channel)
                if (hook) {
                    message.channel.send("conectado ao crossover")
                }
            }
            break
        case "list":
            if (!client.remoteList || Object.keys(client.remoteList).length == 0) {
                message.channel.send("nenhum servidor está conectado")
                return
            }
            const list = "lista de servidores conectados:\n"
            for (const id of Object.keys(client.remoteList)) {
                list += client.guilds.cache.get(id).name + "\n"
            }
            message.channel.send(list)
            break
    }
}