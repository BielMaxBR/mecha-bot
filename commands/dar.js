module.exports = async function({message, args}) {
  await message.channel.send("dei pro " + args[0])
} 