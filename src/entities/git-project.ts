import * as fs from 'fs';
import * as util from 'util';
import { projectsDir } from '../config/projects';

const exec = util.promisify(require('child_process').exec);

export class GitProject {
  name: string;
  desc: string;
  remote: string;
  path: string;
  version: string;

  public constructor(
    name: string,
    desc: string,
    remote: string,
    path: string,
    version: string
  ) {
    this.name = name
    this.desc = desc
    this.remote = remote
    this.path = path
    this.version = version
  }

  public async clone():Promise<void> {
    try {
      if (this.isCloned()) {
        console.log(`Project ${this.desc} already cloned.`);
      }
      else {
        await exec(`git \
                    -C ${projectsDir} \
                    clone ${this.remote} \
                    -b ${this.version} \
                    ${this.name}`);
        console.log(`Project ${this.desc} cloned succesfully!`)
      }
    } catch (e) {
      console.log('Something went wrong here.', e);
    }
  }

  public async update():Promise<void> {
    console.log(`Updating ${this.desc}...`)
    try {
      if (this.isCloned()) {
        await exec(`git \
                    -C ${this.path} \
                    checkout ${this.version}`)
        await exec(`git \
                    -C ${this.path} \
                    pull origin ${this.version}`)
      }
      else {
        console.log(`Seems like ${this.name} wasn't cloned. Skipping.`)
      }
    } catch (e) {
      console.log('Let\'s grab a beer.', e);
    }
  }

  public isCloned():boolean {
    return fs.existsSync(this.path);
  }

}
