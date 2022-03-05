module.exports = {
    name: "kick",
    description: "Vyhodí určitého člena.",
    options: [
      {
        name: "člen",
        description: "Člen, který bude vyhozen.",
        type: "USER",
        required: true,
      },
      {
        name: "důvod",
        description: "Důvod pro kick.",
        type: "STRING",
        required: false,
      }
    ],
    perms: "AT",
    run(int, args, client, discord){
      let reason;
      if(args.get("důvod")){
        reason = args.get("důvod").value;
      }
      const member = int.guild.members.cache.get(args.get("člen").value.toString());
  
      const cembed = new discord.MessageEmbed()
      .setTitle('**Kick**')
      .setDescription(`👢 Uživatel ${member} byl vyhozen z důvodu ${reason}.`)
      .setColor('RED');
      const nembed = new discord.MessageEmbed()
      .setTitle('**Kick**')
      .setDescription(`👢 Uživatel ${member} byl vyhozen.`)
      .setColor('RED');
      const membed = new discord.MessageEmbed()
      .setTitle('**Kick**')
      .setDescription(`👢 Byl(a) jsi vyhozen(a) ze serveru Marks Corporation z důvodu ${reason}.`)
      .setColor('RED');
      const rembed = new discord.MessageEmbed()
      .setTitle('**Kick**')
      .setDescription(`👢 Byl(a) jsi vyhozen(a) ze serveru Marks Corporation.`)
      .setColor('RED');
  
      if(reason){
        member.kick({ reason: reason });
  
        int.followUp({ embeds: [cembed] });
        if(!member.user.bot) member.send({ embeds: [membed] }).catch(() => {});
      } else {
        member.kick();
  
        int.followUp({ embeds: [nembed] });
        if(!member.user.bot) member.send({ embeds: [rembed] }).catch(() => {});
      }
    }
  }