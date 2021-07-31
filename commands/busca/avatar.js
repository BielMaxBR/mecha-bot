const {MessageEmbed} = require("discord.js")

module.exports = async ({ message, args }) => {
    //Identificando usuário a qual pegar avatar
    const user = message.mentions.users.first() || message.author;

    //Pegar avatar e enviar como anexo
    const image = user.displayAvatarURL({ size: 512 });

    const embed = new MessageEmbed()
        .setAuthor("Avatar de " + user.tag, image)
        .setImage(image);

    message.channel.send(embed);
}