/**
 * A small sanity ping pong check to see if the bot is responding.
 * @module commands/ping
 */

/**
 * Execute command
 * @param {Discord.Client} client - The Discord client
 * @param {Discord.Message} message - The message of the command
 * @param {string} args - The arguments of the command
 */
exports.run = async (client, message, args) => {
  const msg = await client.embed.send(message, { desc: 'vote?' }, false)
  await client.embed.edit(message, msg, { desc: `Coming Soon...` })
}

/** Command Config */
exports.conf = {
  enabled: true,
  aliases: ['p'],
  guildOnly: false,
  permLevel: 'User'
}

/** Command Help */
exports.help = {
  name: 'upvote',
  usage: '',
  description: 'vote for the discord bot (gets you more members)'
}
