const client = require('../index.js');
const { MessageEmbed } = require("discord.js");

client.on('messageDelete', async message => {
	if (!message.guild) return;
	const fetchedLogs = await message.guild.fetchAuditLogs({
		limit: 1,
		type: 'MESSAGE_DELETE',
	});

	const deletionLog = fetchedLogs.entries.first();

	if (!deletionLog) return client.channels.cache.get('950788926627532837').send(`A message by ${message.author.tag} was deleted, but no relevant audit logs were found.`);
	
	const { executor, target } = deletionLog;

	const deleteEmbed = new MessageEmbed()
		.setTitle('**Message Deleted**')
		.setDescription(`**Message from:** ${message.author.tag}\n**Deleted by:** ${message.author.tag} - (${message.author.id})`)
		.addField('**__Content:__**', `${message.content}`)
		.setThumbnail(message.author.displayAvatarURL({dynamic: true}))
		.setColor('RANDOM')

	if(message.content.length > 1024) return;
	
	if (target.id === message.author.id) {
		client.channels.cache.get('950788926627532837').send({ embeds: [deleteEmbed] });
	} else {
		client.channels.cache.get('950788926627532837').send({ embeds: [deleteEmbed] });
	}
});
