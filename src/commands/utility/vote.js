/**
 * Sends a dynamic bot invite link to the executor.
 * @module commands/invite
 */

/**
 * Execute command
 * @param {Discord.Client} client - The Discord client
 * @param {Discord.Message} message - The message of the command
 * @param {string} args - The arguments of the command
 */
exports.run = async (client, message, args) => {
  client.embed.send(message, { desc: 'I\'ve sent you a private message with the bot invite link.' })

}

/** Command Config */
exports.conf = {
  enabled: true,
  aliases: [],
  guildOnly: false,
  permLevel: 'User'
}

/** Command Help */
exports.help = {
  name: 'vote',
  usage: '',
  description: 'vote for this bot (gets you more members!)'
}