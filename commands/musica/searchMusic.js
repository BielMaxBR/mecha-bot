const search = require('yt-search')
module.exports = async(music) =>{
  return new Promise((resolve,reject)=>{
    let res = await search(music)
    console.log(res.videos)
    resolve(res.videos[0])
  })
}