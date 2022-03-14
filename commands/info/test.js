const economy = require('../../schemas/eco-schema');

module.exports = {
  name: 'test',
  description: 'Thrillonkův testovací příkaz',
  execute(message, args, cmd, client, discord){

    message.channel.messages.fetch({ limit: 1 }).then(msg => {
      msg.react("🎨")
    })
  }
}