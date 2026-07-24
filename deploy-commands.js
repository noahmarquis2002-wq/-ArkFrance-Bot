import 'dotenv/config';
import { REST, Routes } from 'discord.js';

const commands = [];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log("Déploiement des commandes...");

        await rest.put(
            Routes.applicationCommands(process.env.CLIENT_ID),
            { body: commands },
        );

        console.log("Commandes installées !");
    } catch (error) {
        console.error(error);
    }
})();
