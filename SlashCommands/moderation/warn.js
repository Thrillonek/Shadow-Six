const profile = require("../../schemas/eco-schema");

module.exports = {
  name: "warn",
  description: "Varuje určitého člena.",
  options: [
    { 
      name: "člen", 
      description: "Člen, který bude varován.", 
      type: "USER", 
      required: true 
    },
    {
      name: "důvod",
      description: "Důvod pro warn.",
      type: "STRING",
      required: false,
    }
  ],
  perms: "AT",
  async run(int, args, client, discord){
    const channel = int.guild.channels.cache.find(c => c.name.includes("server-info"));
    const member = int.guild.members.cache.get(args.get("člen").value);
    const date = new Date();

    args.get("důvod") ? reason = args.get("důvod").value : reason = "Nezmíněn"

    const embed = new discord.MessageEmbed()
    .setAuthor(member.user.tag.toString(), member.user.displayAvatarURL({ dynamic: true }))
    .setColor('RED')
    .setDescription(`<@!${member.user.id}> dostal warn`)
    .addFields([
      {name: 'Odesílatel', value: `${int.user.tag}`, inline: true},
      {name: 'Deviant', value: `${member.user.tag}`, inline: true },
      {name: 'Důvod', value: `${reason}`, inline: true}
    ])
    .setFooter(`ID Devianta: ${member.user.id} • ${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`)
    
    if(!member.roles.cache.some(r => r.name === "Bullies")) member.roles.add(int.guild.roles.cache.find(r => r.name === "Bullies"));

    const cembed = new discord.MessageEmbed()
    .setTitle('**⚠️Warn**')
    .setColor('RED')
    .addFields([
      {name: 'Deviant', value: `${member.user}`, inline: true },
      {name: 'Důvod', value: `${reason}`, inline: true}
    ]);

    channel.send({ embeds: [embed] });
    int.followUp({ embeds: [cembed] });
  }
}