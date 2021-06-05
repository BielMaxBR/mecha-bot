const fetch = require('node-fetch');

module.exports = async ({ message }) => {
  const request = await fetch('https://discord.com/api/v9/guilds/' + message.channel.guild.id,{
    headers: {
      authorization: `${process.env.token_type} ${process.env.access_token}`,
    },
  })
  const result = await request.json()
  console.log(await result)
}

