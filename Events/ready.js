module.exports = (client, discord) =>{
  console.log(`${client.user.username} je online!`)

  client.user.setPresence({
    status: 'dnd',
    activities: [{
      name: 'LN-Stream',
      type: 'WATCHING',
    }]
  });
};