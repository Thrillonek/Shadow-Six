module.exports = {
    name: "roles",
    execute(message, args, cmd, client, discord){
      if(!message.author.id === "569599819014733856") return;
      message.delete();
  
      message.channel.messages.fetch("907671137352298616").then(msg => msg.edit({ embeds: [
        new discord.MessageEmbed()
        .setTitle("**Role**")
        .setDescription("<@&851195816223309874> - Majitelka serveru\n<@&851211985218830346> - Spolumajitel serveru\n<@&851866881702232114> - Admin serveru\n<@&900818659805638657> - Helper serveru\n<@&851210879445893140> - Správce/Grafik serveru\n<@&852620651391090718> - Server booster\n<@&867062276023910430> - Vítěz eventu\n<@&867062681864372274> - Dosáhl(a) levelu 60\n<@&867062848675643392> - Dosáhl(a) levelu 50\n<@&867063009342783488> - Dosáhl(a) levelu 40\n<@&867063287765794837> - Dosáhl(a) levelu 30\n<@&867063495254212679> - Dosáhl(a) levelu 20\n<@&867063777249329183> - Dosáhl(a) levelu 10\n<@&867064037006770217> - Speciální role\n<@&851196166003228702> - Člen serveru\n<@&913738287187902504> - Role pro hráče DND pod slovením Guglikmana\n<@&852990704758423583> - Povolení oznamovat stream v <#852992291153510411>\n<@&851356633518571520> - Boti\n<@&867061871398748180> - Boti do Hideaway kategorie\n<@&867064304435462176> - Členi potrestaní warnem\n<@&867064457784328202> - Členi potrestaní dočasným mutem")
        .setColor("#FF0000")
      ] }))
    }
  }