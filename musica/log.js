module.exports = async (channel, event, arg) => {
  switch (event) {
    case "playing":
      channel.send('tocando agora ' + arg)
      break;
    case "pause":
      channel.send('pausando musica')
      break;
    case "resume":
      channel.send('voltando a tocar')
      break;
    case "queued":
      channel.send('Musica adicionada a playlist: \n '+arg.title + " " + arg.url)
  }
}