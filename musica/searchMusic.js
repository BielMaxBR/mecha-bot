const search = require('yt-search')
const client = require('../bot.js')
const ytdl = require('ytdl-core')

module.exports = (music, cid, uid) => {
  return new Promise(async (resolve, reject) => {
    const isUrl = ytdl.validateURL(music)
    let data = {}

    if (isUrl) {
      console.log(music)
      let id = ytdl.getURLVideoID(music)
      let res = await search({ videoId: id })
      data = res

      if (data.url) {
        resolve(data)

      } else {
        reject(null)
      }

    } else {
      let res = await search(music)
      searchList(res.videos, (music) => {
        resolve(music)
      })
    }

  })
}

function searchList(videos, callback) {
  console.log(videos.length)
  client.on('message', message => {
    message.channel.send('\'-\'')
  })
  // manda uma lista de musicas e espera o usuário responder pra mandar o callback ok?
}