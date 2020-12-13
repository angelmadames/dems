import * as fs from 'fs';

export const directoryExists = (dir: string) => {
  return fs.existsSync(dir);
}

export const directoryCreate = (dir: string) => {
  if (!directoryExists(dir)) {
    fs.mkdirSync(dir);
  }
}
