const search = require('yt-search')
module.exports = (music) => {
  return new Promise(async (resolve, reject) => {
    let res = await search({ videoId: music })
    if (res.url) {
      resolve(res.url)

    } else {
      reject(null)
    }
  })
}