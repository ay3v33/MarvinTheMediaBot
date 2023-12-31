const { SlashCommandBuilder } = require('discord.js');


const randint = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('russianroulette')
		.setDescription('Load a six shooter with one bullet, put it to your head and pull the trigger'),

	async execute(interaction) {
        chambers = [1, 2, 3, 4, 5, 6];
        chamber = chambers[randint(0, chambers.length-1)];
        if(chamber == 3) {
            await interaction.reply('You died');
        } else {
            await interaction.reply('You survived');
        }
	},
};