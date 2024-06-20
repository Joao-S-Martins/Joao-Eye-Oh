# TODO
## MVP
- [x] Initialize repo, upload, use script to generate first Github Pages.
- [ ] Social links in the footer.
- [ ] Explore [hero size](https://css-tricks.com/fun-tip-use-calc-to-change-the-height-of-a-hero-component/_) changes based on viewport size.
- [ ] Create hero header, maybe with [fixed video](http://jsfiddle.net/V74WH/4/).
- [ ] Add content to root for state (like sidebar open) and sizes (like nav hight).
- [ ] Restyle home page
- [ ] Restyle header
- [ ] SEO header experiments
- [ ] Restyle blog list view
- [ ] Update deployment to Cloudflare or similar
- [ ] Point URL at deployment
- [ ] Remove/hide default blogs and docs


## Feature
- [ ] Create caption classes with styles that mimic [Snap](https://generatestatus.com/fake-snapchat-generator-2/) and other social media as well as simple captions with positioning and [shapes](https://css-tricks.com/the-shapes-of-css/) or [speech bubbles](https://sharkcoder.com/visual/shapes#section12).
- [ ] Add IDs and update URL hash while scrolling.
- [x] Update side images to use sticky like slide gallery, and under break-point should be image over copy.
- [ ] Create 3 breakpoints; 640px-, 641px-996px, 997px+. Maybe fake the middle range with [`calc()`](https://css-tricks.com/using-calc-to-fake-a-media-query/).


## Upgrade/Update
- [x] Update --caption-height to the [actual caption height](https://stackoverflow.com/questions/442404/retrieve-the-position-x-y-of-an-html-element).
- [ ] Implement [fast-average-color](https://github.com/fast-average-color/fast-average-color) for default backgrounds and text or left/right caption & invert for caption background.
- [ ] Implement IdealImage or just the algorithm.
- [ ] Implement [react-update-url-on-scroll](https://github.com/pvoznyuk/react-update-url-on-scroll) to add hashes to URL while scrolling, for easier sharing.
- [x] Implement linting to enforce my own consistency
- [x] Implement stricter type checking
- [x] Screenshot regression testing w/ Playwright
- [ ] Fix Argos CI integration so I don't have to run regression tests locally
- [x] Convert React classes to components for gallery objects and where ever it makes sense
- [x] Upgrade to Docusaurus v3
- [ ] Create a monorepo where gallery and special components have their own homes
  - [ ] Create storybooks for the component packages
  - [ ] Split testing into each appropriate component package


## Bug
- [ ] BUG: GalleryImage background-attachment:fixed & background-size:cover|100% calculates based on browser width, not figure width. Solution may be to set background-size:calc(100% - var(--doc-sidebar-width)|var(--doc-sidebar-hidden-width)) & background-position:right. `main.docMainContainerEnhanced_node_modules-@docusaurus-theme-classic-lib-theme-DocPage-Layout-Main-styles-module` exists when the side nav is closed.
- [ ] BUG: ScrollGallery doesn't set alpha/zoom when loading. Becomes apparent when refreshing or resizing the page.
- [ ] BUG: ScrollGallery doesn't resize itself with the browser/device.
- [ ] BUG: Highest resolution image is the only version that loads.


