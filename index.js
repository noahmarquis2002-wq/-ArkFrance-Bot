require("dotenv").config();

const { Client, GatewayIntentBits, ActivityType } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds
  ]
});

client.once("ready", () => {
  console.log(`${client.user.tag} est connecté !`);

  client.user.setPresence({
    activities: [
      {
        name: "ArkFrance Marketplace",
        type: ActivityType.Watching
      }
    ],
    status: "online"
  });
});

client.login(process.env.TOKEN);
