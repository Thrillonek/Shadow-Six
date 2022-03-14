module.exports = {
    name: "hideaway",
    execute(message, args, cmd, client, discord){
      if(!message.author.id === "569599819014733856") return;
      message.delete();
  
      message.channel.send({ embeds: [
        new discord.MessageEmbed()
        .setTitle("**Centra Hideaway**")
        .setColor("#000000")
        .setDescription("<#867121663274778695> – Dobrodružství s botem <@!555955826880413696>\n<#867120344297242644> – Centrum obývané Dank memerem s aktivním modulem currency obchodní commandy.\n<#867075447018881136> – Nákup předmětů, které můžete využít v jiných centrech\n<#867075906904653855> – Pracovní centrum na vydělání si penízků do shop-centra\n<#951193841225072710> - Centrum obývané Tupperboxem určené pro hraní role play.\n<#867075043866705961> – Centrum obývané Tupperboxem určené pro registraci postav. Help command je tul!help.\n<#867119898929266749> – Různé memy a obrázky od <@!270904126974590976>\n<#867076061203529729> – Různé vtipy a hry s textem za pomocí bota <@!270904126974590976>.")
      ] });
  
      message.channel.send({ embeds: [
        new discord.MessageEmbed()
        .setTitle("**Pravidla pro Role-play**")
        .setDescription("• Toto centrum je spravované botem @Tupperbox, který slouží ke hře zvané role-play.\n• Pomocí commandu tul!register si založte svůj role-play účet.\n• tul!register (name) (name:text)\npříklad: tul!register Akena akena:text\n• Poté co máte postavu založenou, nahrajte její příběh a profilovku.\n• Command pro profilovku: tul!avatar (name) (url)\n• Command pro příběh: tul!describe (name) (popis)\n• Popis musí obsahovat:\n1. Věk\n2. Charackter/Povaha\n3. Minulost\n4. Vzhled (pokud není k dispozici profilovka)\n• Píšete přes svůj nastavený command name:text\npříklad: akena:\"Ahoj všichni!\"\n• Vždy na začátku hry se domluvte na příběhu.\n• Pravidla psaní:\n1. Přímá řeč se píše v 1. osobě za použití uvozovek.\npříklad: \"Ahoj všichni!\"\n2. Nepřímá řeč/popis děje se píše v 1. osobě za použití kurzívy.\npříklad: Zvedla jsem ruku a zamávala.\n3. Přímou a nepřímou řeč pište na odděleném řádku.\npříklad: Vešla jsem do místnosti.\n„Ahoj všichni!“\nZvedla jsem ruku a zamávala.\n4. Dodržujte charakter a příběh vašich postav.")
        .setColor("#0016C8")
      ] })
    }
  }