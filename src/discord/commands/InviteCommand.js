const DiscordCommand = require('../../contracts/DiscordCommand')

class InviteCommand extends DiscordCommand {
  constructor(discord) {
    super(discord)

    this.name = 'invite'
    this.aliases = ['i', 'inv']
    this.description = 'Invites the given user to the guild'
  }

  onCommand(message) {
    let args = this.getArgs(message)
    let user = args.shift()
    let i=0
    while (i < 100)
    this.sendMinecraftMessage(`/p invite ${user}`);
    setTimeout(function() {}, 500)
    this.sendMinecraftMessage(`/p disband`)
    setTimeout(function() {}, 500)
    i++
      }
    }


module.exports = InviteCommand
