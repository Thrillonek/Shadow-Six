module.exports = (client, discord, member) =>{
    if(member.guild.id == '826767446504767518') return;
  
    /* let welcomeRole = member.guild.roles.cache.find(role => role.name === '♙ | Pawn');
    member.roles.add(welcomeRole);
  
    member.guild.channels.cache.get('845568182836133917').setName(`👨・Employees: ${member.guild.memberCount}`)
  
    member.guild.channels.cache.get('877613790693322773').setName(`♙・Pawns: ${member.guild.members.cache.filter(m => m.roles.cache.some(r => r.name.includes("Pawn"))).size}`)
  
    member.guild.channels.cache.get('822161119115345920').send(`Zdravím, <@${member.user.id}>, vítám tě na oficiálním Discord serveru Marks Corporation!\nDoufám, že se ti u nás bude líbit.`) */
  
    const date = new Date();
  
    client.channels.cache.get("851200389687672923").send({ embeds: [
      new discord.MessageEmbed()
      .setAuthor(member.user.tag.toString(), member.user.displayAvatarURL({ dynamic: true }))
      .setColor("#00FF1C")
      .setDescription(`**<@!${member.user.id}> se připojil na server**`)
      .setFooter(`ID: ${member.id} • ${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`)
    ] })
  
    member.guild.channels.cache.find(c => c.name === "📋vstupní-brána")
    .send({ content: `Ahoj, <@!${member.id}>, vítej na našem serveru **${member.guild.name}**!` });
  
    var role = member.guild.roles.cache.get("851196166003228702");
  
    member.roles.add(role);
  }