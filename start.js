//const server = require("./server/server.js")
const bot = require("./bot.js")
console.log(Object.keys(bot))
require('dotenv').config()
//server.listen(process.env.PORT || 5005)
bot.login(process.env.TOKEN);