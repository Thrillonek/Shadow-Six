module.exports = {
    name: "unmute",
    description: "Odstraní mute určitému členovi.",
    options: [
      { name: "člen", description: "Člen, kterému chceš mute odstranit.", type: "USER", required: true}
    ],
    perms: "AT",
    run(int, args, client, discord){
      /* Error embed */
      var error = new discord.MessageEmbed()
      .setTitle("Chyba")
      .setColor("RED")
  
      /* Member */
      var member = int.guild.members.cache.get(args.get("člen").member.id);
      if(!member) return int.followUp({ embeds: [ error.setDescription("Deviant nebyl nalezen.") ] });
      if(!member.roles.cache.some(r => r.name === "Leeches")) return int.followUp({ embeds: [ error.setDescription("Deviant mute nemá.") ] })
  
      /* Role */
      var muteRole = int.guild.roles.cache.find(r => r.name === "Leeches");
      var basicRole = int.guild.roles.cache.find(r => r.name === "Nomes");
      member.roles.remove(muteRole);
      member.roles.add(basicRole);
  
      /* Zpráva */
      int.followUp({ embeds: [
        new discord.MessageEmbed()
        .setTitle("__Unmute__")
        .setColor("#000000")
        .setDescription(`Členu **${member.user.username}** byl odstraněn mute.`)
      ] }) 
    }
  }