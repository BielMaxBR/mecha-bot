const fetch = require('node-fetch');

module.exports = async function({message, args = new Array(0)}) {
  let content = ''
  args.forEach(val => content += " "+val.toString())
  fetch('https://pt.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch='+content).then(response => response.json())
  .then(async response =>{
    const result = JSON.stringify(response.query.search[0].snippet)
    console.log(response)
    await message.channel.send("```json\n"+result+"\n```")
  })
}

//https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=fifa