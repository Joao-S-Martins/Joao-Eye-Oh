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
View the site at [https://joao-s-martins.github.io/Joao-Eye-Oh/](https://joao-s-martins.github.io/Joao-Eye-Oh/).

### Ideal Image

```mdx
import Image from '@theme/IdealImage';
import thumbnail from './path/to/img.png';

// your React code
<Image img={thumbnail} />

// or
<Image img={require('./path/to/img.png')} />
```

## TODO
- [ ] BUG: GalleryImage background-attachment:fixed & background-size:cover|100% calculates based on browser width, not figure width. Solution may be to set background-size:calc(100% - var(--doc-sidebar-width)|var(--doc-sidebar-hidden-width)) & background-position:right. `main.docMainContainerEnhanced_node_modules-@docusaurus-theme-classic-lib-theme-DocPage-Layout-Main-styles-module` exists when the side nav is closed.
- [x] Initialize repo, upload, use script to generate first Github Pages.
- [ ] Create 3 breakpoints; -640px, 641px-996px, 997px+. Maybe fake the middle range with [`calc()`](https://css-tricks.com/using-calc-to-fake-a-media-query/)
- [ ] Implement [fast-average-color](https://github.com/fast-average-color/fast-average-color) for default backgrounds and text or left/right caption & invert for caption background.
- [ ] Implement [react-update-url-on-scroll](https://github.com/pvoznyuk/react-update-url-on-scroll) to add hashes to URL while scrolling, for easier sharing.
- [ ] Implement IdealImage or just the algorithm.
- [ ] Explore [hero size](https://css-tricks.com/fun-tip-use-calc-to-change-the-height-of-a-hero-component/_) changes based on viewport size.
- [ ] Create caption classes with styles that mimic [Snap](https://generatestatus.com/fake-snapchat-generator-2/) and other social media as well as simple captions with positioning and [shapes](https://css-tricks.com/the-shapes-of-css/) or [speech bubbles](https://sharkcoder.com/visual/shapes#section12).
- [ ] Update --caption-height to the [actual caption height](https://stackoverflow.com/questions/442404/retrieve-the-position-x-y-of-an-html-element).
- [ ] Create hero header, maybe with [fixed video](http://jsfiddle.net/V74WH/4/).
- [ ] Update side images to use sticky like slide gallery, and under break-point should be image over copy.


## References
- [MDX](https://mdxjs.com/)
- [Docusaurus Markdown features](https://docusaurus.io/docs/markdown-features)

## Inspirations
- [jack.ventures](http://jack.ventures/)
- [sunbliss.github.io/photorama/](https://sunbliss.github.io/photorama/)
- [jack.ventures/sample/inner-mongolia/](http://jack.ventures/sample/inner-mongolia/)
- [Adobe Express Pages](https://www.adobe.com/express/)
