module.exports = {
    name: "ban",
    description: "Zabanuje určitého člena.",
    options: [
      {
        name: "člen",
        description: "Člen, který bude zabanován.",
        type: "USER",
        required: true,
      },
      {
        name: "důvod",
        description: "Důvod pro ban.",
        type: "STRING",
        required: false,
      }
    ],
    perms: [
      { id: "851185884678324224", type: "ROLE", permission: false },
      { id: "852889397191245844", type: "ROLE", permission: false },
      { id: "851195816223309874", type: "ROLE", permission: true },
      { id: "851211985218830346", type: "ROLE", permission: true },
      { id: "851866881702232114", type: "ROLE", permission: true },
      { id: "851210879445893140", type: "ROLE", permission: true },
      { id: "569599819014733856", type: "USER", permission: true },
    ],
    run(int, args, client, discord){
      let reason;
      if(args.get("důvod")){
        reason = args.get("důvod").value;
      }
  
      const member = int.guild.members.cache.get(args.get("člen").value.toString());
  
      const cembed = new discord.MessageEmbed()
      .setTitle('**Ban**')
      .setDescription(`<:BAN:849907987569049601> Uživatel ${member} byl zabanován z důvodu \`${reason}\`.`)
      .setColor('RED');
      const nembed = new discord.MessageEmbed()
      .setTitle('**Ban**')
      .setDescription(`<:BAN:849907987569049601> Uživatel ${member} byl zabanován.`)
      .setColor('RED');
      const membed = new discord.MessageEmbed()
      .setTitle('**Ban**')
      .setDescription(`<:BAN:849907987569049601> Byl(a) jsi zabanován(a) ze serveru Marks Corporation z důvodu \`${reason}\`.`)
      .setColor('RED');
      const rembed = new discord.MessageEmbed()
      .setTitle('**Ban**')
      .setDescription(`<:BAN:849907987569049601> Byl(a) jsi zabanován(a) ze serveru Marks Corporation.`)
      .setColor('RED');
  
      if(reason){
        member.ban({ reason: reason });
        
        int.followUp({ embeds: [cembed] });
        if(!member.user.bot) member.send({ embeds: [membed] }).catch(() => {});
      } else {
        member.ban();
  
        int.followUp({ embeds: [nembed] });
        if(!member.user.bot) member.send({ embeds: [rembed] }).catch(() => {});
      }
    }
  }