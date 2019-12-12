# Rule 34 Progressive Web App (PWA)

App to enjoy all Rule 34 sites combined in a mobile-friendly experience

![Dashboard Preview](.github/images/dashboard.png)
![Settings Preview](.github/images/settings.png)

## Visit it

**You can try it online on the next links, both run the same code from this repository**

[https://r34.app/](https://r34.app/)
> Powered by Github Pages

![Uptime Robot status](https://img.shields.io/uptimerobot/status/m783780173-8cc12bab199ae89671203f69?style=for-the-badge)

Or backup

[https://rule34-pwa.netlify.com/](https://rule34-pwa.netlify.com/)
> Powered by Netlify

[![Netlify Status](https://api.netlify.com/api/v1/badges/703629e2-193f-4bb0-9349-f02a22d50ed1/deploy-status)](https://app.netlify.com/sites/rule34-pwa/deploys)

# API

This PWA uses a Json wrapper for various rule34 XML APIs, it is developed and mantained by me, and can be found [here](https://github.com/VoidlessSeven7/Rule-34-App-Original-API).

## Future

Since the API is being hosted on heroku's free tier, It wont hold lots of connections at the same time, specially when serving videos from Rule 34 APIs, So I've planned and developed a solution:

![Network Map](.github/images/map.png)

If I duplicate the API and use a Load Balancer, a lot of stress would be removed and it would continue to work fine, but I have the following problems: 

**Monetary problem**, I don't have the funds (7€/month) to pay for the duplicated API, or the Load Balancer (7€/month).
Since this is a **free** service that I'm offering, with **no ads** to generate revenue, I ask of you, **if you really like my work**, please donate whatever amount you can to the future of this app.

[Patreon](https://patreon.com/VoidlessSeven7)

[Paypal](https://www.paypal.me/Alejandrorr7)


## Technologies used

#### Languages 
HTML, SCSS, Javascript

#### Technologies
NodeJS, NPM, NuxtJS, VueJS, Webpack, etc.

You should read [package.json](package.json) for the full list

## VSCode dependencies
ESLint, Prettier, Vetur

###### Recommended for developing
> File utils, Calamity theme

## Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
