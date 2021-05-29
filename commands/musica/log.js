module.exports = async (channel, event) => {
  switch(event) {
    case "playing":
      channel.send('tocando musica agora')
      break;
    case "pause":
      channel.send('pausando musica')
      break;
    case "resume":
      channel.send('voltando a tocar')
      break;
  }
}