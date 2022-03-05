module.exports = {
    name: "clear",
    description: "Vymaže daný počet zpráv.",
    options: [{
      name: "počet",
      description: "Počet zpráv pro vymazání.",
      type: "NUMBER",
      required: true,
    }],
    perms: "AT",
    run(int, args, client, discord){
      int.channel.messages.fetch({ limit: args.get("počet").value +1 }).then(m => {
        int.channel.bulkDelete(m);
      })
    }
  }