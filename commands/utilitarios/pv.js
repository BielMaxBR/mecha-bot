module.exports = async function({ message, args }) {
    const mention = message.mentions.members.first()

    let text = ''
    for(let i = 1; i < args.length; i++) {
        text += args[i] + " "
    }

    await message.channel.send(`${message.member.nickname || message.author.username} está enviando no pv de ${mention.nickname || mention.user.username}`)

    await mention.send(`_texto enviado por ${message.member.nickname || message.author.username}_\n \n${text}`)
}