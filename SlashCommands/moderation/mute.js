const ms = require("ms");

module.exports = {
  name: "mute",
  description: "Dá mute určitému členovi.",
  options: [
    { name: "člen", description: "Člen, kterému chceš mute dát.", type: "USER", required: true },
    { name: "důvod", description: "Důvod pro mute.", type: "STRING", required: false },
    { name: "doba", description: "Doba, po kterou mute přetrvá.", type: "STRING", required: false }
  ],
  perms: "AT",
  run(int, args, client, discord){
    /* Error embed */
    const error = new discord.MessageEmbed()
    .setTitle("Chyba")
    .setColor("RED")

    /* Variables */
    var reason = "";
    if(args.get("důvod")) reason = `z důvodu \`${args.get("důvod").value}\``;
    var doba = "neurčitou";

    /* Member */
    var member = int.guild.members.cache.get(args.get("člen").member.id.toString());
    if(!member) return int.followUp({ embeds: [ error.setDescription("Deviant nebyl nalezen.") ] })
    if(member.roles.cache.some(r => r.name === "Leeches")) return int.followUp({ embeds: [ error.setDescription("Deviant už mute má.") ] })

    /* Role */
    var muteRole = int.guild.roles.cache.find(r => r.name === "Leeches");
    var basicRole = int.guild.roles.cache.find(r => r.name === "Nomes");
    member.roles.add(muteRole);
    member.roles.remove(basicRole);

    /* Doba */
    if(args.get("doba")){
      if(/*isNaN()args.get("doba").value || */!["m", "h", "d", "y", "s", "min"].some(a => args.get("doba").value.endsWith(a))) return int.followUp({ embeds: [ error.setDescription("Povolené časové jednotky: \`s\`, \`m\`, \`h\`, \`d\`, \`y\`") ] });
      doba = `\`${args.get("doba").value}\``
      setTimeout(() => {
        member.roles.remove(muteRole);
        member.roles.add(basicRole);
      }, ms(args.get("doba").value))
    }

    /* Zpráva */
    int.followUp({ embeds: [
      new discord.MessageEmbed()
      .setTitle("__Mute__")
      .setColor("#000000")
      .setDescription(`Člen **${member.user.username}** dostal mute ${reason} po dobu ${doba}.`)
    ] })    
  }
}