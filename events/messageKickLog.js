const client = require('../index.js');
const { MessageEmbed, Message } = require("discord.js");

client.on('guildMemberRemove', async member => {
	const fetchedLogs = await member.guild.fetchAuditLogs({
		limit: 1,
		type: 'MEMBER_KICK',
	});
	const kickLog = fetchedLogs.entries.first();

	if (!kickLog) return client.channels.cache.get('950788926627532837').send(`${member.user.tag} left the guild, most likely of their own will.`);

	const { executor, target } = kickLog;

    const kickEmbed = new MessageEmbed()
    .setTitle('**Member he/she kicked**')
    .setDescription(`**User Name:** ${member.user.tag}Left the guild\n**kicked by:** ${executor.tag})?!`)
    .setColor('RANDOM')
	
	if (target.id === member.id) {
		client.channels.cache.get('950788926627532837').send({ embeds: [kickEmbed] });
	} else {
		client.channels.cache.get('950788926627532837').send({ embeds: [kickEmbed] });
	}
});