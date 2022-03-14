const fs = require('fs');

module.exports = (client, discord) =>{
    const single_files = fs.readdirSync(`./commands`).filter(file => file.endsWith('.js'));

    for(const single_file of single_files){
        const command = require(`../commands/${single_file}`);
        if(command.name){
            client.commands.set(command.name, command);
        } else {
            continue;
        }
    }

    const load_dir = (dirs) =>{
      const files = fs.readdirSync(`./commands/${dirs}/`).filter(file => file.endsWith('.js'));

      for(const file of files){
          const command = require(`../commands/${dirs}/${file}`);
          if(command.name){
              client.commands.set(command.name, command);
          } else {
              continue;
          }
      }
    }

    ['info'/*, 'moderation', 'utils'*/].forEach(x => load_dir(x));
};