const { exec } = require("child_process");

module.exports = ({ message, args }) => {
  let texto = ''
  args.forEach(value => texto += value.toString() + " ")
  exec(texto, (error, stdout, stderr) => {
    console.log(stdout);
    msg = '.'
    if (stdout) {
      msg += stdout
    }
    if (stderr) {
      msg += stderr
    }
    if (error) {
      msg += error
    }
    message.channel.send(msg);
  })
} 