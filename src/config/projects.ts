export const gitUrl = 'git@github.com:soluciones-gbh';
export const projectsDir = process.cwd() + '/projects';
import { GitProject } from '../entities/git-project'

export const defaultProjectVersion = "develop"

const api = new GitProject(
  "api",
  "DemoAPI",
  `${gitUrl}/demo-api.git`,
  `${projectsDir}/api`,
  `${defaultProjectVersion}`
)

const web = new GitProject(
  "web",
  "DemoWebApp",
  `${gitUrl}/demo-webapp.git`,
  `${projectsDir}/webapp`,
  `${defaultProjectVersion}`
)

export const Projects = [
  api,
  web,
];
