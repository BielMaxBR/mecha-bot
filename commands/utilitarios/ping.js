module.exports = async function({message}) {
  const m = await message.channel.send("Ping?");
  console.log("ping")
  m.edit(`Pong! A Latência é ${m.createdTimestamp - message.createdTimestamp}ms.`);
}