module.exports = async ({ client,message, args }) => {
  if (message.author.id != '434089428160348170' && message.author.id != "597926883069394996") return;
  let content = '';
  args.forEach(value => content += value + ' ');

  var startpos = content.indexOf('```') + 1;
  var endpos = content.indexOf('```', startpos);
  var result = content.substring(startpos, endpos);

  try{
    eval(content);
    eval(result);
  }catch(err){
    console.log(err);
    message.channel.send(`\`\`\`${err}\`\`\``);
  }
  //await message.channel.send(eval(content))
}
