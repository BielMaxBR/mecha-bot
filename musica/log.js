const { MessageEmbed } = require('discord.js')
module.exports = async (channel, event, arg) => {
  switch (event) {
    case "playing":
      channel.send(new MessageEmbed()
        .setAuthor('Tocando agora')
        .setColor('#ff0000')
        .setTitle(arg.title)
        .setThumbnail(arg.image)
        .setFooter('Mecha-bot')
        .setURL(arg.url)
      )
      break;
    case "pause":
      channel.send('pausando musica')
      break;
    case "resume":
      channel.send('voltando a tocar')
      break;
    case "queued":
      channel.send(new MessageEmbed()
        .setAuthor('Musica adicionada')
        .setColor('#ff0000')
        .setTitle(arg.title)
        .setThumbnail(arg.image)
        .setFooter('Mecha-bot')
        .setURL(arg.url)
      )
      break;
  }
}