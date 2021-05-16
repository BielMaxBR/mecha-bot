const fetch = require('node-fetch');
const Discord = require('discord.js')
//const cheerio = require('cheerio')

module.exports = async function({message, args}) {
  let content = ''
  args.forEach(val => content += val.toString()+"+")
  const url = 'https://api.duckduckgo.com/?q='+encodeURI(content)+'&format=json&pretty=1&skip_disambig=1&no_html=1'

  console.log(url)

  fetch(url,{headers:{"accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7"}}).then(response => response.json())
  .then(async res =>{
    console.log(res)
    const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#faf600')
      .setTitle(res.Heading)
      .setAuthor(res.AbstractSource)
      .setDescription(res.AbstractText)
      .setThumbnail(res.Image != '' ? 'https://api.duckduckgo.com'+res.Image : 'https://cdn.iconscout.com/icon/free/png-256/duckduckgo-3-569238.png')
      .setTimestamp()
      .setFooter('DuckDuckGo api')
      .setURL(res.AbstractURL)


    await message.channel.send(exampleEmbed)
  })
}
