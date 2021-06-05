const search = require('yt-search')
const ytdl = require('ytdl-core')

module.exports = (music) => {
  return new Promise(async (resolve, reject) => {
    const isUrl = ytdl.validateURL(music)
    let data = {}

    if (isUrl) {
      let id = ytdl.getURLVideoID(music)
      let res = await search({ videoId: id })
      data = res

    } else {
      let res = await search(music)
      data = res.videos[0]

    }

    if (data.url) {
      resolve(data)

    } else {
      reject(null)
    }
  })
}