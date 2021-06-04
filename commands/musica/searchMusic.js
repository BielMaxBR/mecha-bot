const search = require('yt-search')
module.exports = (music) =>{
  return new Promise(async (resolve,reject)=>{
    let res = await search(music)
    let url = res.videos[0].url
    console.log(url)
    if(url) {
    resolve(url)
      
    } else {
      reject(null)
    }
  })
}