const { Client } = require("discord.js")
const client = new Client()
const prefix = '!!'

client.on('ready', ()=>{
  client.user.setActivity('mecha bot na área', 'COMPETING')
  let activities = [
    "amogus",
    "minescrefts",
    "fogo gratis",
    "tretris"
  ]
  i = 0;
  setInterval(() => client.user.setActivity(`${activities[i++ % activities.length]}`), 3000);
})

client.on('message',message => {
  const content = message.content
  if (!content.startsWith(prefix) || message.author.bot) return;
  
  const args = content.slice(prefix.length).trim().split(' ');
  const command = args.shift().toLowerCase();
  
  try {
    require(`./commands/${command}.js`)({client,message,args})
  } catch(err) {
    console.log(err)
  }
})

module.exports =  client