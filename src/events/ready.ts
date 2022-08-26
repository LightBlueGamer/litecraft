import type { Client } from "discord.js";

export default {
    name: 'ready',
    once: true,
    async execute(client: Client) {
        console.log(`Bot is running as ${client.user!.username}.`)
    }
}