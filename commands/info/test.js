const economy = require('../../schemas/eco-schema');
const mongo = require('../../mongo');

module.exports = {
  name: 'test',
  description: 'Thrillonkův testovací příkaz',
  execute(message, args, cmd, client, discord){

    message.channel.messages.fetch({ limit: 1 }).then(msg => {
      msg.react("🎨")
    })
  }
}