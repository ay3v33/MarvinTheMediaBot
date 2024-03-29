
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('clear')
		.setDescription('clears entered number of chats in the channel used')
		.addIntegerOption(option =>
			option
				.setName('number')
				.setDescription('The number of chats to be deleted')
				.setRequired(true)
		),

	async execute(interaction) {
		const input = interaction.options.getInteger('number');
		
		if(interaction.member.permissions.has("Administrator")) {
			if(input < 1){
				interaction.reply(`What are you talking about`);
			} else if(input > 50){
				interaction.reply(`I'm not deleting ${input} messages buddy`);
			} else {
				interaction.channel.bulkDelete(input).then(() => {
					if (input == 1) {
						interaction.reply(`Deleted message.`).then(reply => {
							setTimeout(() => {
								reply.delete();
							}, 2000);
						});
					} else {
						interaction.reply(`Deleted ${input} messages.`).then(reply => {
							setTimeout(() => {
								reply.delete();
							}, 2000);
						});
					}
				});
			}
		} else {
			interaction.reply(`You can't do that pal`);
		}
	},
};
