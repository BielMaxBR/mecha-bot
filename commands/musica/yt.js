const search = require('yt-search');
const ytdl = require('ytdl-core');
const {MessageEmbed} = require('discord.js')
module.exports = async ({ message, args }) => {
  let text = ''
  const con = await message.member.voice.channel.join()
  args.forEach(v => text += v + " ")
  con.play(ytdl(text)).setVolumeDecibels(10)
  // let r = await search(text)
  // let video = r.videos[0]
  // const msg = new MessageEmbed()
  //     .setColor('#ff0000')
  //     .setTitle(video.title)
  //     .setDescription(video.description)
  //     .setThumbnail(video.image)
  //     .setFooter('Mecha-bot')
  //     .setURL(video.url)

  // await message.channel.send(msg)
}