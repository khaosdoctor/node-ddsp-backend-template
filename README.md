# DDSP Template

This is a template repository for faster creation of backends based on a layered Node.js [architecture called DDSP](https://github.com/nxcd/developer-handbook), which was created by @khaosdoctor and @rjmunhoz while working at @nxcd.

This architecture has been tested in several applications, from simple APIs to CLIs, Telegram Bots, Frontends, Desktop Apps and so on. It is pretty extensible.

__It counts on__:

- Dependency injection using [TSyringe](https://github.com/microsoft/tsyringe)
- [Standard](https://github.com/standard/standard) as linter and fixer
- [TypeScript](https://typescriptlang.org) ready
- Tests with [Mocha](https://mochajs.org)
