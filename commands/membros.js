module.exports = async({message})=>{
  await message.channel.send(message.channel.guild.members)
}