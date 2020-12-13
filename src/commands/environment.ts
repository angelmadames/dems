import {Command, flags} from '@oclif/command'

export default class Environment extends Command {
  static description = 'Set up the environment!'

  static flags = {
    setUid: flags.boolean({
      char: 'u',
      description: 'Configures user\' ID inside containerized resources.',
      default: true,
    }),
    copyEnv: flags.boolean({
      char: 'd',
      description: 'Configures dotenv environment file.',
      default: true,
    }),
  }

  async run() {
    const {flags} = this.parse(Environment);
  }
}
