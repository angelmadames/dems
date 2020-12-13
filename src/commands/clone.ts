import { Command, flags } from '@oclif/command'
import { Projects, defaultProjectVersion, projectsDir } from '../config/projects'
import { directoryCreate } from '../helpers';

export default class Clone extends Command {

  static description = 'Clone configured projects!'

  static flags = {
    all: flags.boolean({
      char: 'l',
      description: 'All defined projects will be cloned.',
      default: false,
    }),
    default: flags.boolean({
      char: 'd',
      description: 'Only default projects will be cloned (APIs, Contact Center, Koneksi).',
      default: true,
    }),
    update: flags.boolean({
      char: 'u',
      description: 'All projects will be updated according to their selected branch.',
      default: false,
    }),
    apiVersion: flags.string({
      char: 'a',
      description: 'Demo API project version.',
      default: `${defaultProjectVersion}`,
    }),
    webVersion: flags.string({
      char: 'w',
      description: 'Demo WebApp project version.',
      default: `${defaultProjectVersion}`,
    }),
  }

  async run() {
    const {flags} = this.parse(Clone);

    directoryCreate(projectsDir);

    if (flags.default) {
      Projects.forEach((project) => {
        project.clone();
      })
    }
  }
}
