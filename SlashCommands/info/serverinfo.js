module.exports = {
    name: "server-info",
    description: "Ukáže info o serveru.",
    run(int, args, client, discord){
      const date = int.guild.createdAt;
      int.followUp({ embeds: [
        new discord.MessageEmbed()
        .setColor("#00FFFF")
        .setTitle(`${int.guild.name}`)
        .setFields([
          { name: "Owner", value: "akio-san#6501", inline: true },
          { name: "Server Vytvořen", value: `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`, inline: true },
          { name: "Počet Rolí", value: int.guild.roles.cache.size.toString() },
          { name: "Počet Členů", value: `${int.guild.memberCount}\n${int.guild.members.cache.filter(m => m.user.bot).size} botů, ${int.guild.members.cache.filter(m => !m.user.bot).size} lidí`, inline: true },
          { name: "Level Boostu", value: int.guild.premiumTier.toString().slice(5) },
          { name: "Počet Boostů", value: int.guild.premiumSubscriptionCount.toString(), inline: true },
        ])
        .setFooter(`Server ID: ${int.guild.id}`)
      ] })
    }
  }