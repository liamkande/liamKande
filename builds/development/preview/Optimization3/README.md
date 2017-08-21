# Optimization

This is the **4th** project in Udacity's [Front-End Web Developer Nanodegree](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001) program. It provides a portfolio website that must be optimized to achieve a high [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) score and steady FPS.

## Optimization Process
1. Concatenated appropriate `.js` and `.css` files.
2. Minified `.css`, `.js`, `.html`, and images.
3. Applied `media` and `async` attributes where appropriate.
4. Moved google analytics scripts to end of body.
5. Refactored `views/js/main.js`.
6. Replaced pizzeria thumbnail with a resized image.
7. Replaced remotely hosted thumbnails with locally hosted versions (allowing image optimization and manipulation of `cache-control` headers).
8. Set `cache-control` `max-age` to 1 year for appropriate resources.
9. Applied finger-prints to appropriate resources for cache-busting purposes.
10. Inlined critical and other appropriate `.css`.
11. Removed use of google fonts.

## Quickstart

- Install [Node](https://nodejs.org/en/) and [Gulp](http://gulpjs.com/).
- Clone the repository, navigate to this project, and install dependencies.
```
  git clone https://github.com/udacity/frontend-nanodegree-mobile-portfolio.git
  npm install 
```
- Run the desired gulp task. *(See `gulpfile.js` for additional tasks.)*
```
  gulp # Lints then serves source files.
  gulp build # Builds distribution files.
  gulp serve:dest # Serves distribution files.
  gulp psi # Displays the PageSpeed Insights report. (Modify the psiPath variable in gulpfile.js to test different pages.)
```


