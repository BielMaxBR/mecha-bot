const fetch = require('node-fetch');
//const cheerio = require('cheerio')

module.exports = async function({message, args}) {
  let content = ''
  args.forEach(val => content += " "+val.toString())
  const url = 'https://pt.wikipedia.org/w/api.php?action=opensearch&limit=1&namespace=0&format=json&search='+content

  console.log(url)

  fetch(url).then(response => response.json())
  .then(async response =>{
    const link = response[3]

    const html = await fetch(link)

  //  let $ = cheerio.load(html)

//    console.log($)
    await message.channel.send(link)
  })
}

//https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=fifa
