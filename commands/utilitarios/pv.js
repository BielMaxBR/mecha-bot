module.exports = async function({ message, args }) {
    const mention = message.mentions.members.first()

    let text = ''
    for(let i = 1; i < args.length; i++) {
        text += args[i] + " "
    }

    await message.channel.send(`${message.author.nickname || message.author.name} está enviando no pv de ${mention.nickname || mention.user.username}`)

    await mention.send(`_texto enviado por ${message.author.nickname || message.author.name}_\n \n${text}`)
}