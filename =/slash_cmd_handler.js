const fs = require('fs');

module.exports = (client, discord) => {
  const load_dir = (dirs) => {
    const files = fs.readdirSync('./SlashCommands/'+dirs).filter(f => f.endsWith('.js'))
    client.on('ready', async () => {
      for(const file of files){
        const cmd = require('../SlashCommands/'+dirs+'/'+file);
        const c = await client.guilds.cache.get('851185884678324224').commands.create({
          name: cmd.name,
          description: cmd.description,
          options: cmd.options,
        })
        const guild = client.guilds.cache.get("851185884678324224");
        if(cmd.perms) {
          if(cmd.perms === "AT"){
            client.guilds.cache.get('851185884678324224').commands.permissions.set({
              command: c.id,
              permissions: [
                { id: "851185884678324224", type: "ROLE", permission: false },
                { id: "851195816223309874", type: "ROLE", permission: true },
                { id: "851211985218830346", type: "ROLE", permission: true },
                { id: "851866881702232114", type: "ROLE", permission: true },
                { id: "900818659805638657", type: "ROLE", permission: true },
                { id: "851210879445893140", type: "ROLE", permission: true },
                { id: "569599819014733856", type: "USER", permission: true },
              ]
            })
          } else {
            client.guilds.cache.get('851185884678324224').commands.permissions.set({
              command: c.id,
              permissions: cmd.perms,
            })
          }
        }

        client.cooldown.set(c.name, c);
      }
    }); 

    client.on('interactionCreate', async (int) => {
      for(const file of files){
        const cmd = require('../SlashCommands/'+dirs+'/'+file);
        await int.deferReply().catch(() => {});
        if(int.isCommand() && int.commandName === cmd.name){
          const args = int.options;
          cmd.run(int, args, client, discord);
        }
      }
    })
  }
  ['info', 'moderation', 'util'].forEach(x => load_dir(x));
}