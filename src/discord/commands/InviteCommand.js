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
    const sleepNow = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
    async function repeatedGreetingsLoop() {
      while (i<10){
        await sleepNow(500)
        this.sendMinecraftMessage(`/p invite ${user}`);
        await sleepNow(500)
        this.sendMinecraftMessage(`/p disband`)
        i++
      }
      }
    }
  }

module.exports = InviteCommand
