const { MessageEmbed, ReactionCollector } = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Prostě help',
    async execute(message, args) {

      message.react("<:check_yes:824257188323131472>");
        
      const embed = new MessageEmbed()
      .setTitle('**Help**')
      .addFields(
          {name: 'Moderation příkazy', value: 'Zareaguj na ❗'},
          {name: 'Zpět sem, na hl. stránku help', value: 'Zareaguj na 📃'}
      )

      const moderation = new MessageEmbed()
      .setTitle('List příkazů na moderaci:')
      .addFields(
        {name: 'Ban {@User} {důvod}', value: 'Zabanuje @User'},
        {name: 'Kick {@User} {důvod}', value: 'Vyhodí @User'},
        {name: 'Mute {@User} {čas} {důvod}', value: 'Mutne @User na {čas(pokud chcete mute nekonečný, použijte zde 0)}'},
        {name: 'Unmute @User', value: 'Unmutne @User'},
        {name: 'Warn {@User} {důvod}', value: 'Upozorní @User'},
        {name: 'Clear {Číslo}', value: 'Smaže {Číslo} zpráv'},
        {name: 'Suggest {návrh}', value: 'Vytvoří embed s {návrh}'},
        {name: 'Ticket', value: 'Vytvoří ticket'}
      )
      .setFooter('📃 pro hlavní stránku helpu');

      message.channel.send({ embeds: [embed] }).then(async (msg) =>{
        await msg.react('❗');
        await msg.react('📃');

        const filter = (reaction) => msg.author.id == '838383164459974677';

        const collector = new ReactionCollector(msg, { filter });
        collector.on("collect", (reaction, user) =>{
          reaction.users.remove(user.id);
          switch(reaction.emoji.name){
            case "❗":
              msg.edit({ embeds: [moderation] });
              break;
            case "📃":
              msg.edit({ embeds: [embed] });
              break;
          }
        })
      });

    }
}