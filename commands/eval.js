module.exports = async ({ client,message, args }) => {
  if (message.author.id != '434089428160348170') return
  console.log('///'*15)
  let content = ''
  args.forEach(value => content += value + ' ')
  eval(content)
  //await message.channel.send(eval(content))
}