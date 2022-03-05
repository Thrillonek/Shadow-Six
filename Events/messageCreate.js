module.exports = async (client, discord, message) => {
    const prefix = "="
  
    if(message.author.bot) return;
  
    const m = (m, message) => message.content.toLowerCase().includes(m);
  
    /*if(m('dobré ráno', message)){
      message.react("<:marksgoodmorning:831463547682553877>");
    } else if(m('dobrou noc', message)){
      message.react("<:goodnight:831463831271112714>");
    } else*/ if(m('zdravím', message)){
      message.react("<:sixHI:851493910307668006>");
    }
      
    if(!message.content.startsWith(prefix)) return;
  
  
    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();
  
    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));
  
    if(command) command.execute(message, args, cmd, client, discord);
  }