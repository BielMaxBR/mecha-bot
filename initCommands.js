const { opendir } = require("fs/promises")

module.exports = async (client) => {
  const dirs = await opendir('./commands')
  // itera sobre cada categoria
  for await (let dir of dirs) {
    if (dir.isDirectory()) {
      let path = './commands/' + dir.name // + "/" + command + ".js"
      const comds = await opendir(path)
      for await (let comd of comds) {
        if (!comd.isDirectory() && comd.name.indexOf('.js') != -1) {
          if (!client.commands) client.commands = {}
          client.commands[comd.name.replace('.js', '')] = require(path + '/' + comd.name)
        }
      }
    }
  }
  // console.log(Object.keys(client.commands))
}