const { pegarHook, criarHook } = require("../../misc/webhookManager.js")

module.exports = async ({ client, message, args }) => {

    if (message.guild.me.hasPermission("MANAGE_WEBHOOKS")) {
        message.channel.send("Eu não tenho permissão de gerenciar webhooks, chame um adm para me liberar")
        return
    }
    if (args.length == 0) {
        message.channel.send("Comando para conexão de chat com outros sevidores")
        return
    }
    const command = args[0].toLowerCase()

    let args2 = args.slice(1, args.length - 1)
    switch (command) {
        case "connect":
            if (!client.remoteList) client.remoteList = {}

            const channel = message.guild.channels.cache.get(args2[0]) || message.channel
            client.remoteList[message.guild.id] = channel.id

            if (!await pegarHook(channel)) {
                const hook = await criarHook(channel)
                if (hook) {
                    message.channel.send("conectado ao crossover")
                    return
                }
            }
            message.channel.send("conectado ao crossover")
            break
        case "list":
            if (!client.remoteList || Object.keys(client.remoteList).length == 0) {
                message.channel.send("nenhum servidor está conectado")
                return
            }
            let list = "lista de servidores conectados:\n"
            for (const id of Object.keys(client.remoteList)) {
                list += client.guilds.cache.get(id).name + "\n"
            }
            message.channel.send(list)
            break
        default:
            message.channel.send("Comando para conexão de chat com outros sevidores")
            break
    }
}