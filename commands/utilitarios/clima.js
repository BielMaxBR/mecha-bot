const { MessageEmbed } = require("discord.js")
const fetch = require("node-fetch")
require("dotenv").config()

module.exports = async ({ message, args }) => {
    const url = "http://api.openweathermap.org/data/2.5/weather?"

    const apiKey = "&appid=" + process.env.API
    const lang = "&lang=pt_br"
    const unit = "&units=metric"

    let argsJunto = ""

    args.forEach(arg => argsJunto += encodeURI(arg.toLowerCase()) + "+")

    argsJunto = argsJunto.slice(0, argsJunto.length - 1)

    const city = "&q=" + argsJunto
    console.log(city)

    const request = await fetch(url + city + apiKey + lang + unit)
    const json = await request.json()

    console.log(json)

    if (json.cod == 404) {
        message.channel.send("cidade não encontrada")
        return
    }

    var embed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle(`Previsão do tempo para ${json.name} = ${json.sys.country}`)
        .setDescription(`${json.weather[0].description}`)
        .addFields(
        {
            name: "**Temperatura**",
            value: `Atual: ${json.main.temp} ºC \n
                        Máxima: ${json.main.temp_max} ºC \n 
                        Mínima: ${json.main.temp_min} ºC \n 
                        Sensação térmica: ${json.main.feels_like} ºC`,
            inline: true
        }, { name: "**Umidade**", value: `${json.main.humidity}%`, inline: true }, { name: "**Velocidade do vento**", value: `${json.wind.speed} km/h`, inline: true }, { name: "**Pressão do ar**", value: `${json.main.pressure} kPA`, inline: true })

    message.channel.send(embed)
}