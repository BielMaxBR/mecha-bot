const fetch = require('node-fetch');

module.exports = async ({ message }) => {
  const request = await fetch('https://discord.com/api/v9/guilds/' + message.channel.guild.id + '/members', {
    headers: {
      Authorization: `Bot ${process.env.TOKEN}`,
    },
  })
  const result = await request.json()
  console.log(await result)
  await message.channel.send(JSON.parse(await result.length))
}