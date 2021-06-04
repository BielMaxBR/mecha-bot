const search = require('yt-search')
module.exports = (music) =>{
  return new Promise(async (resolve,reject)=>{
    let res = await search(music)
    console.log(res.videos)
    resolve(res.videos[0])
  })
}