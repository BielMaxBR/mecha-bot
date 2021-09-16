module.exports = async function({ message, args }) {
    const mention = message.mentions.members.first()

    let text = ''
    for(let i = 1; i < args.length; i++) {
        text += args[i] + " "
    }

    await message.channel.send(`enviando no pv de ${mention.nickname || mention.user.username}`)

    await mention.send(text)
}