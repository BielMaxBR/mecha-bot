module.exports = async ({ message, args }) => {
    let textoFinal = ""
    let textoInicial = ""

    args.forEach(value => textoInicial += value + ' ')
    textoInicial = textoInicial.trim()

    for (let i = textoInicial.length - 1; i > -1; i--) {
        textoFinal += textoInicial[i]
    }

    message.channel.send("```" + textoFinal + "```")
}