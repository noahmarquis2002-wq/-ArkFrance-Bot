import { SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
  .setName("ping")
  .setDescription("Teste le bot ArkFrance");

export async function execute(interaction) {
  await interaction.reply("🏓 Pong ! Le bot ArkFrance fonctionne !");
}
