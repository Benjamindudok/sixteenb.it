# www.sixteenb.it

> A gallery of downloadable 16-bit game assets.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Content generation
sixteenb.it does not use any database or content management system. Instead, the whole site content lives in a static json that you can generate with the command below.

``` bash
# crawl content folder to generate a content.json
npm run crawl
```

The crawler looks through a content folder for ```.json``` files with the following format. Every json file it finds needs to have an associated image with a similar name.

``` javascript 
{
    "name": "Character 01",
    "slug": "character-01",
    "tags": ["any", "tag", "you", "want"]
}
```