const search = require('yt-search')
module.exports = async(music) =>{
  return new Promise(()=>{
    let res = search(music)
    console.log(res.videos)
    resolve(res.videos[0])
  })
}