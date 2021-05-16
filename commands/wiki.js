const fetch = require('node-fetch');

module.exports = async function({message, args}) {
  let content = ''
  args.forEach(val => content += " "+val.toString())
  fetch('https://pt.wikipedia.org/w/api.php?action=opensearch&limit=1&namespace=0&format=json&search='+content).then(response => response.json())
  .then(async response =>{
    const result = response[3]
    console.log(result)
    await message.channel.send(result)
  })
}

//https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=fifa