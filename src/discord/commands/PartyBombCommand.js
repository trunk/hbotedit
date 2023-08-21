const DiscordCommand = require('../../contracts/DiscordCommand')

class PartyBombCommand extends DiscordCommand {
  constructor(discord) {
    super(discord)

    this.name = 'partybomb'
    this.aliases = ['pb', 'partybomb']
    this.description = 'NUUUUUUKED LAWWWL'
  }

  onCommand(message) {
    let args = this.getArgs(message)
    let user = args.shift()
    let i=0
    while (i < 100)
    setTimeout(function() { this.sendMinecraftMessage(`/p invite ${user}`)}, 500);
    setTimeout(function() { this.sendMinecraftMessage(`/p disband`)}, 500);
    i++
      }
    }

module.exports = PartyBombCommand
