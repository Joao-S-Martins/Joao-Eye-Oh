# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Scripts & Tools

### Installation

```
$ npm
```

### Set NVM Version

Open Git Bash with administrative privileges.

```
$ nvm use 18.5.0
```

### Local Development

```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
View the site at [https://joao-s-martins.github.io/Joao-Eye-Oh/](https://joao-s-martins.github.io/Joao-Eye-Oh/). If there seems to be an issue, check the [deployment page](https://github.com/Joao-S-Martins/Joao-Eye-Oh/deployments).

### Ideal Image

```mdx
import Image from '@theme/IdealImage';
import thumbnail from './path/to/img.png';

// your React code
<Image img={thumbnail} />

// or
<Image img={require('./path/to/img.png')} />
```

## References
- [MDX](https://mdxjs.com/)
- [Docusaurus Markdown features](https://docusaurus.io/docs/markdown-features)

## Inspirations
- [jack.ventures](http://jack.ventures/)
- [sunbliss.github.io/photorama/](https://sunbliss.github.io/photorama/)
- [jack.ventures/sample/inner-mongolia/](http://jack.ventures/sample/inner-mongolia/)
- [Adobe Express Pages](https://www.adobe.com/express/)
