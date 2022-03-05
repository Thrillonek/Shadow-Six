module.exports = (client, discord, interaction) => {

    if(interaction.isButton() && interaction.customId === "duck"){
      interaction.deferReply({ ephemeral: true }).catch(() => {});
      interaction.followUp({ content: "You ducked up"})
    }
  }