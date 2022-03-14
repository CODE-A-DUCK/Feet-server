const { Client, CommandInteraction, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "button",
    desciption: "button just button :>",
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {

        const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setCustomId('primary')
                .setLabel('Primary')
                .setStyle('PRIMARY'),
        );
        interaction.followUp({ content: 'button!', components: [row] });
    },
};
