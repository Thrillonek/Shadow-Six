module.exports = {
    name: 'rules',
    execute(message, args, cmd, client, discord){
  
      if(!message.author.id === "569599819014733856") return;
      message.delete();
  
      //const channel = message.guild.channels.cache.get('822147696809738251');
  
      message.channel.messages.fetch("907671124807155793").then(msg => msg.edit({ embeds: [
        new discord.MessageEmbed()
        .setTitle('**Pravidla Discord Serveru**')
        .setDescription('**1)** Nebuďte toxičtí, neprovokujte a dodržujte pravidla slušného chování.\n**2)** Zákaz spamování, přílišného používání Caps locku a smajlíků.\n**3)** Nesmíte používat ping @everyone, pokud vám to nepovolí <@&851195816223309874>, <@&851211985218830346> anebo <@&851866881702232114>.\n**4)** Zákaz vulgárních přezdívek, jmen a profilovek. Vulgární slova v chatu používejte velmi omezeně a zakryjte je spoilerem či cenzurou.\n**5)** Zákaz druhého účtu na serveru pokud vám to nepovolí <@&851195816223309874>, <@&851211985218830346> anebo <@&851866881702232114>. Všechny nepovolené účty dostanou okamžitě ban a jejich majitel warn s rolí <@&867064304435462176>.\n**6)** Zákaz propagace jiných serverů, youtube channelu, instagramu, twitteru a jiných stránek. Je povoleno posílat inspirativní materiál do <#900814743785312256>.\n**7)** Zákaz vnucování různých ideologií, názorů, LGBTQIA+ a náboženství.\n**8)** Zákaz všeobecné diskriminace.\n**9)** Zákaz řešení jiných problémů mimo server.\n**10)** Vkládejte do jednotlivých center pouze obsah, který je pro ně určený.\n**11)** V <#851215717998002186> centru vkládejte umění pouze vytvořené vámi. Pokud jste obkreslovali či překreslovali cizí práci oznamte to či připište originálního autora.\n**12)**  Pokud chcete oznámit stream v <#852992291153510411> požádejte o roli streamer <@&851195816223309874>, <@&851211985218830346> anebo <@&851866881702232114>. Připište téma a čas.\n**13)** Oznámený stream se bude streamovat pouze ve Stream centru. Sledující bez role <@&852990704758423583> mají zakázáno streamovat vlastní obsah a jinak narušovat probíhající stream.\n**14)** Zákaz NSFW, lehce brutální obrázky musí být zakryté spoilerem.\n**15)** Černý humor je zde povolen, pokud je v souladu s pravidly serveru.\n**16)** Dodržujte pravidla serveru a nevymáhejte po členech, aby dodržovali vaše vymyšlená pravidla, které nejsou součástí oficiálních pravidel serveru.\n**17)** Všichni členové mají povolené posílat pozvánky na tento server a připínat zprávy, takže pokud máte důležitý obsah, který chcete mít připnutý, můžete si jej připnout sami, ale žádám vás, abyste této možnosti nezneužívali.\n**18)** Respektujte adminy.\n\n**Tresty za porušení pravidel**\n**1)** Slovní upozornění\n**2)** Warn s rolí <@&867064304435462176>\n**3)** Ban\n\n\n***NEZNALOST PRAVIDEL SE NEOMLOUVÁ***\nPokud jste byli potrestáni neoprávněně, oznamte to <@&851195816223309874> nebo <@&851211985218830346>.')
        .setColor('#FF0000')
      ] }));
    }
  }