const server = require("./server/server.js")
const bot = require("./bot.js")
const dotenv = require( 'dotenv')
dotenv.config()
server.listen(process.env.PORT || 3000)
bot.login(process.env.TOKEN);