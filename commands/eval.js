module.exports = async ({ client,message, args }) => {
  if (message.author.id != '434089428160348170') return
  let content = ''
  args.forEach(value => content += value + ' ')
  await eval(content).bind(this)
  //await message.channel.send(eval(content))
}