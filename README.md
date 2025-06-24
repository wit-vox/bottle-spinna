# Bottle Spinna <img  align="left" width="120" src="https://github.com/wit-vox/bottle-spinna/assets/25911312/c0a6d7e2-e498-436d-9ddd-4c0460f68fae">
This project is a simple web-based "Spin the Bottle" app. It's designed for casual fun and learning purposes. The app spins a bottle when you click a button, providing a lighthearted game experience that mimics the classic "Spin the Bottle" game.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Live Demo
You can try out the app [here](https://wit-vox.github.io/bottle-spinna/) and video [here](https://www.youtube.com/shorts/nze9e_QgjJg).

## Project Structure
The project contains three main files:

### Generic files for a website 
- index.html: The HTML file that structures the webpage.
- styles.css: The CSS file for styling the page.
- script.js: The JavaScript file that handles the bottle's spinning functionality.

### PWA specific files
- sw.js: Service workers facilitate offline caching and enable background synchronization, enhancing the functionality of PWAs.
```
var GHPATH = '/bottle-spinna';

var APP_PREFIX = 'bs_';
 
var VERSION = 'version_00';
 
var URLS = [    
  `${GHPATH}/`,
  `${GHPATH}/bottle.png`,
  `${GHPATH}/index.html`,
  `${GHPATH}/styles.css`,
  `${GHPATH}/script.js`
 ]
```
- manifest.json: The JSON file that contains essential metadata for a PWA, allowing it to offer an installable and app-like experience.
```
{
    "name": "Bottle Spinna",
    "short_name": "Bottle Spinna",
    "description": "Bottle Spinna App",
   
    "scope": "/bottle-spinna/",
    "start_url": "/bottle-spinna/",
   
    "background_color": "rgb(253, 255, 254)",
    "theme_color": "rgb(253, 255, 254)",
   
    "display": "fullscreen", 
   
    "icons": [
        {
          "src": "/bottle-spinna/bottle.png",
          "type": "image/png",
          "sizes": "700x700"
        }
    ]
}
```
- in the index.html you must include references to the `manifest.json` and `sw.js`:
```
...in the <head>
<link rel="manifest" href="/bottle-spinna/manifest.json">

...at the end of <body> or in your script.js
<script>
    if (navigator.serviceWorker) navigator.serviceWorker.register ('/bottle-spinna/sw.js',{scope: '/bdazz/'})
</script>
```

## Related Projects
Check out also [this repo](https://github.com/codepo8/github-page-pwa) which outlines how to build a GitHub page-based Progressive Web App (PWA).
