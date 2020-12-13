# Development Environment Management System

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g dems
$ dems COMMAND
running command...
$ dems (-v|--version|version)
dems/0.0.0 darwin-x64 node-v12.16.1
$ dems --help [COMMAND]
USAGE
  $ dems COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`dems hello [FILE]`](#dems-hello-file)
* [`dems help [COMMAND]`](#dems-help-command)

## `dems hello [FILE]`

describe the command here

```
USAGE
  $ dems hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ dems hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/angelmadames/dems/blob/v0.0.0/src/commands/hello.ts)_

## `dems help [COMMAND]`

display help for dems

```
USAGE
  $ dems help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src/commands/help.ts)_
<!-- commandsstop -->
