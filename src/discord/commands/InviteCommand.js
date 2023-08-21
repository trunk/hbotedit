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
    let i = 0
    while (i<10){   
      this.sendMinecraftMessage(`/p invite ${user}`);
      setTimeout(() => { this.sendMinecraftMessage(`/p disband`); }, 500);
      setTimeout(() => { i++ }, 600);
    }
      }
      }
  

module.exports = InviteCommand
