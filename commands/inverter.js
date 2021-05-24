module.exports = async ({ message, args }) => {
  let texto = ''
  args.forEach(value => texto += value.toString() + " ")
  console.log(texto)
  await message.channel.send("```\n" + flipString(texto) + "\n```")
}

function flipString(aString) {
  aString = aString.toLowerCase();
  var last = aString.length - 1;
  var result = "";
  for (var i = last; i >= 0; --i) {
    result += flipChar[aString.charAt(i)]
  }
  console.log(result)
  return result;
}

let flipChar = {
  'a':'\u0250',
  'b':'q',
  'c':'\u0254',
  'd':'p',
  'e':'\u01DD',
  'f':'\u025F',
  'g':'\u0183',
  'h':'\u0265',
  'i':'\u0131',
  'j':'\u027E',
  'k':'\u029E',
  'l':'\u05DF',
  'm':'\u026F',
  'n':'u',
  'o':'o',
  'p':'d',
  'q':'b',
  'r':'\u0279',
  's':'s',
  't':'\u0287',
  'u':'n',
  'v':'\u028C',
  'w':'\u028D',
  'x':'x',
  'y':'\u028E',
  'z':'z',
  '[':']',
  ']':'[',
  '(':')',
  ')':'(',
  '{':'}',
  '}':'{',
  '?':'\u00BF',
  '\u00BF':'?',
  '!':'\u00A1',
  "\'":',',
  ',':"\'",
  '.':'\u02D9',
  '_':'\u203E',
  ';':'\u061B',
  '9':'6',
  '6':'9',
  ' ': ' ',
  'ç': '\u0254'
}