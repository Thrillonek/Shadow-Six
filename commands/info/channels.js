module.exports = {
    name: "channels",
    execute(message, args, cmd, client, discord){
      if(!message.author.id === "569599819014733856") return;
      message.delete();
  
      message.channel.send({ embeds: [
        new discord.MessageEmbed()
        .setTitle("**Centra**")
        .setColor("#FF0000")
        .addFields([
          { name: "**Vstupní kanál**", value: "<#851185885172596738> – Vítá nové členy\n<#852992291153510411> – oznámené streamy, které se budou streamovat v <#851185885172596741> centru v určitý den a čas\n<#867119237595660293> – Oznámení novinek na serveru\n<#867428476201861180> – Oznámení nových videích/streamu na LN stream channelu" },
          { name: "**Podpora**", value: "<#851359321966510110> – Vaše návrhy k vylepšení serveru\n<#867430638029111346> – Vaše dotazy ohledně serveru a channelu" },
          { name: "**LN-Streamy**", value: "<#851190468196958248> – Teorie, informace, otázky a další určené k sérii Little Nightmares\n<#851187294190567454> – Materiály k sérii Little Nightmares jako jsou obrázky, screenshoty, reference, odkazy\n<#851197863726809088> – Meme, vtipy, komiksy, animace a další zabývající se Little Nightmares sérií" },
          { name: "**Jiná zábava**", value: "<#851192451968008293> – Hlavní centrum určené pro klasický chat\n<#851185885172596739> – Teorie, informace, otázky a další určené k jiným hrám mimo Little Nightmares sérii\n<#851192600274141184> - Teorie, informace, doporučení a další k anime nebo mangám\n<#886676942957465681> – Meme, vtipy, komiksy, animace a další určené k jiným zaměřením mimo Little Nightmares sérii\n<#851215717998002186> – Pouze vaše umění jako například ilustrace, komiksy, příběhy, animace a další\n<#851507187880689684> – Zábava s botem <@!839082890595794985>\n<#900814743785312256> - Zde můžete posílat materiály k inspiraci, ale nepropagujte přímé stránky na autory" },
          { name: "**Hlasové kanály**", value: "<#851186391449862156> – Hudba na oživení voice center za pomocí <@!736888501026422855>\n<#851190522341359616> – Pokud nemůžete používat z jakéhokoliv důvodu mikrofon ve voicu" }
        ])
      ] })    
    }
  }