const discord = require('discord.js');
const client = new discord.Client({
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
  intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS", "GUILD_BANS", "GUILD_EMOJIS_AND_STICKERS", "GUILD_INTEGRATIONS", "GUILD_WEBHOOKS", "GUILD_INVITES", "GUILD_VOICE_STATES", "GUILD_PRESENCES", "GUILD_MESSAGE_REACTIONS", "GUILD_MESSAGE_TYPING", "DIRECT_MESSAGES", "DIRECT_MESSAGE_REACTIONS", "DIRECT_MESSAGE_TYPING"],
  allowedMentions: { parse: ["users", "roles"], repliedUser: true }
});

const guild = client.guilds.cache.get("851185884678324224");

client.commands = new discord.Collection();
client.cooldown = new discord.Collection();

[/*'command_handler',*/ 'event_handler', 'slash_cmd_handler'].forEach(handler =>{
  require(`./=/${handler}`)(client, discord);
});

client.login(process.env.TOKEN);
