module.exports = (client, discord, member) =>{
    if(member.guild.id == '826767446504767518') return;
  
    const date = new Date();
  
    client.channels.cache.get("851200389687672923").send({ embeds: [
      new discord.MessageEmbed()
      .setAuthor(member.user.tag.toString(), member.user.displayAvatarURL({ dynamic: true }))
      .setColor("RED")
      .setDescription(`**<@!${member.user.id}> se odpojil ze serveru**`)
      .setFooter(`ID: ${member.id} • ${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`)
    ] })
  }