# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Sunnyside agency landing page solution](#frontend-mentor---sunnyside-agency-landing-page-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

-   View the optimal layout for the site depending on their device's screen size
-   See hover states for all interactive elements on the page

### Screenshot

![](https://raw.githubusercontent.com/charlesmiller0412/sunnyside_agency/main/Project%20Display%20Images/sunnysideDesktop.webp)

### Links

-   Solution URL: [https://github.com/charlesmiller0412/sunnyside_agency](https://github.com/charlesmiller0412/sunnyside_agency)
-   Live Site URL: [https://charlesmiller0412.github.io/sunnyside_agency/](https://charlesmiller0412.github.io/sunnyside_agency/)

## My process

### Built with

-   Mobile-first workflow
-   [React](https://reactjs.org/) - JS library
-   [Webpack](https://webpack.js.org/) - React bundler
-   [SCSS](https://sass-lang.com/) - For styles
-   [BEM (Block Element Modifier)](https://getbem.com/) - Style naming methodology

### What I learned

One issue I ran in to as far as UX is concerned, was that the mobile menu would stay open when the screen is expanded to a larger viewport which there would be no way to close it. Understanding that this is unlikely to happen since user's arent usually expanding the screen from mobile to desktop, it still just felt like something I should change. This is where my useMediaQuery hook came in handy with useLayoutEffect.

```js
const matches = useMediaQuery("(min-width: 768px)");

useLayoutEffect(() => {
    matches && setShowMenu(false);
});
```

## Author

-   Website - [Charles Miller](https://www.charlesmiller.dev)
-   Frontend Mentor - [@charlesmiller0412](https://www.frontendmentor.io/profile/charlesmiller0412)
-   Instagram - [@millersWebDev](https://www.instagram.com./millersWebDev)
-   Twitter - [@millersWebDev](https://www.twitter.com/millersWebDev)]
