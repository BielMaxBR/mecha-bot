const search = require('yt-search')
const ytdl = require('ytdl-core')

module.exports = (client, music, channel, uid) => {

  return new Promise(async (resolve, reject) => {
    const isUrl = ytdl.validateURL(music)
    let data = {}

    if (isUrl) {
      console.log(music)
      let id = ytdl.getURLVideoID(music)
      let data = await search({ videoId: id })

      if (data.url) {
        resolve(data)

      } else {
        reject(null)
      }

    } else {
      let res = await search(music)
      searchList(client, channel, uid, res.videos, (music) => {
        resolve(music)
      })
    }

  })
}

async function searchList(client, channel, uid, videos, callback) {
  videos.length = 10
  let videostxt = '```nim\n'

  for (let video in videos) {
    let nome = videos[video].title

    if (nome.length > 33) {
      nome = nome.slice(0, 33)
      nome += '...'
    }
    while(nome.length < 36) {
      nome += " "
    }

    nome = nome
      .replace(`"`,"")
      .replace("'","")
      .replace('*',"")
      .replace('**',"")
      .replace('`',"")
      .replace('```',"")

    let duracao = videos[video].timestamp
    let digito = +video+1
    let text = ` ${digito}- ${nome} -- ${duracao}`

    videostxt += text + '\n'
  }

  videostxt += '\n \n (fale o número que deseja de 1 a 10 ou digite Q para cancelar")```'

  const msgList = await channel.send(videostxt)
  
  
  
  msgList.fetch().then(_ => {
    let achou = false
    
    client.on('message', m => {
      if (m.channel.id == channel.id && m.author.id == uid ) {
        if (m.content == "Q") {
          callback(null)
          return
        }
        let num = +m.content
        if(!num) return
        if (num < 1 || num > 10) {
          m.reply('Envie um número de 1 a 10')
          return
        }

        achou = true
        callback(videos[num-1])
        return
      }
    })

    setTimeout(()=>{
      if(!achou) {
        callback(null)
      }
    },60000)
  
  })
  // manda uma lista de musicas e espera o usuário responder pra mandar o callback ok?
}