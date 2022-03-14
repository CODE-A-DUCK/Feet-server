const client = require('../index.js');
const { MessageEmbed } = require("discord.js");

client.on('guildBanAdd', async ban => {
	const fetchedLogs = await ban.guild.fetchAuditLogs({
		limit: 1,
		type: 'MEMBER_BAN_ADD',
	});
	const banLog = fetchedLogs.entries.first();

	if (!banLog) return client.channels.cache.get('950788926627532837').send(`${ban.user.tag} was banned from ${ban.guild.name} but no audit log could be found.`);

	const { executor, target } = banLog;

    const bannedEmbed = new MessageEmbed()
    .setTitle('**Member banned**')
    .setDescription(`${ban.user.tag} got banned at ${ban.guild.name} \n${executor.tag} Ban he/she`)
    .setColor('RANDOM')

if (target.id === ban.user.id) {
    client.channels.cache.get('950788926627532837').send({ embeds: [bannedEmbed] });
} else {
    client.channels.cache.get('950788926627532837').send({ embeds: [bannedEmbed] });
}
});