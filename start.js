import server from "./server.js"
import bot from "bot.js"

server.listen(process.env.PORT || 3000)
bot.login(process.env.TOKEN);