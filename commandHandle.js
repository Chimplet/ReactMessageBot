const { prefix } = require("./config.json")




module.exports = (client, aliases, callback) => {
    if (typeof aliases === 'string') {
        aliases = [aliases]
    }
    

    client.on('message', message => {
        const { content } = message;


        aliases.forEach(alias => {
            const command = `${prefix}${alias}`

            if (content.startsWith(`${command} `) || content === command) {
                if (message.guild === null) {
                    console.log(message.author.username + ` Is Running:  ${command}`)
                } else {
                    console.log(message.author.username + ` Is Running:  ${command}` + ' in :  ' + message.guild.name)
                }
                callback(message)
            }
        })
    })
}