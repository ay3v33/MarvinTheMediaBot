const { SlashCommandBuilder, GuildExplicitContentFilter } = require('discord.js');
require('dotenv').config();
const privledgedUsers = [process.env.ME, process.env.JORDAN, process.env.ED];

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
        if(privledgedUsers.includes(interaction.user.id)) {
			if(input < 1){
				interaction.reply(`Tf u mean delete ${input} messages.`);
			} else if(input > 50){
				interaction.reply(`I'm not deleting ${input} messages buddy`);
			} else {
				interaction.channel.bulkDelete(input).then(() => {
					if(input==1){
						interaction.reply(`Deleting 1 message.`).then(msg => msg.delete(3000));
					} else {
						interaction.reply(`Deleting ${input} messages.`).then(msg => msg.delete(3000));
					}
            	});
        	}
		} else {
			interaction.reply(`You can't do that pal`);
		}
	},
};