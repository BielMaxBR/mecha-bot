module.exports = async ({ message, args }) => {
  let content = ''
  let deleteMsg = [false, 0]
  if (args[0] == '-del') deleteMsg = [true, 1]

  for (let msg = 0 + deleteMsg[1]; msg < args.length; msg++) {
    content += args[msg] + " "
  }

  if (content.length != 0) {
    await message.channel.send(content)
    if (deleteMsg[0]) {
      await message.delete()
    }
  } else {
    await message.reply('nao posso enviar nada vazio!')
  }
}