module.exports = ({message}) => {
  const used = process.memoryUsage();
  let text = 'Ram usage:\n'
  for (let key in used) {
    texto += `${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB\n`
  }
  message.channel.send(text)
}