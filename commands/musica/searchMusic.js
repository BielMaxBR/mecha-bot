const search = require('yt-search')
module.exports = (music) =>{
  return new Promise(async (resolve,reject)=>{
    let res = await search(music)
    let url = res.videos[0].url
    let title = res.videos[0].title
    console.log(url)
    if(url) {
    resolve({url,title})
      
    } else {
      reject(null)
    }
  })
}