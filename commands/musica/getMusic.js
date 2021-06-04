const search = require('yt-search')
module.exports = (music) => {
  return new Promise(async (resolve, reject) => {
    let res = await search({ videoID: music })
    if (res.videos[0].url) {
      resolve(res.videos[0])

    } else {
      reject(null)
    }
  })
}