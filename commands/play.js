
const playMusic = require('./musica/playMusic.js')

module.exports = async({client, message, args}) => {
  playMusic(message, args[0])
}