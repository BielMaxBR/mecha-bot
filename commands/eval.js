module.exports = async ({ message, args }) => {
  if (message.author.id != '434089428160348170') return
  let content = ''
  args.forEach(value => content += value + ' ')
  eval(content)
  //await message.channel.send(eval(content))
}