# Web App Boilerplate
  
> Because we all really just wanna get right down to building an app, with zero upfront bullshit tooling setup cost.  

This boilerplate is intended to find a sweet spot between barebones for building a maintainable web application 
and not having the-kitchen-sink thrown in from the start.
   

## Usage
To use this boilerplate as a basis for a new application:

1. Clone this repo
2. Change the relevant bits in package.json
3. Run the following: `npm i && npm start`
4. Open `http://localhost:3000`
    
And that's it!  
  

## Motivation
So we've all been feeling the [javascript fatigue][js-fatigue] in web development.  After starting a bunch of side 
projects to learn technologies, frameworks, and libraries, I found myself performing the same setup over and over again. 
I tried using quite a few of the many static boilerplates and yeoman generators out there ... some of which are VERY 
well put together. However, I always found myself wanting slightly more of control over what got dropped in for any 
given project.  I will likely be borrowing some of my favorite concepts from some of these [other][react-slingshot] 
[boilerplates][rrsk] for this one.

### Tenets
What I want out of a boilerplate comes down to this:

1. **Dev Speed**  
This is the main and most important tenet here.  Something small that covers fundamentals is what's going to get us 
writing the code that matters ASAP. 
  
  
2. **Simplicity / Configurability**  
Rather than having a boilerplate that does ALL THE THINGS, I prefer something with the absolute basics of a good project
so that you can choose what technologies you want when the time is right.  Even the "basics" I choose here are items 
that I'd want to eventually make configurable (via yeoman perhaps)
  
  
3. **Documentation**  
This means having a boilerplate that's easy to walk through, has information about what each of the dev dependencies
is for, and that has meaningful comments so that the whole thing doesn't just become a big pile of magic.
  
  
### What this boilerplate brings
* **Transpiling** - [[babel]]  
We're [continually getting more][tc39-ecma] features and language improvements and as a result, one of the the first 
things I want to do is have the ability to write code in the most recent version of the language ... and have that 
transpiled down into browser-ready javascript for me.  Babel is what's getting me there.
  
  
* **Small Size** - [[webpack]]  
One of my biggest pet peeves when starting a new project writing the first few lines, transpiling it down, and seeing a 
ridiculously large bundle come out the other end.  WTF?  So, this boilerplate will always emit bundles that have the 
**smallest footprint possible**. 

  * While I'd love to start with the ability to drop it down another notch with [tree-shaking][tree-shaking], this is 
    only supported in the 2.x version of webpack which currently is still in beta. Also, webpack's 2.x documentation
    is still lacking.  Will pull that in when it's better supported/documented.
  
  
* **Debugging** - [[webpack]]  
If I can't make use of the debugging tools available to me right from the start, that's a deal-breaker. As a result, 
sourcemaps are a requirement here.  
  
  
* **Production-Ready from the start** - [[webpack]]  
Having a singular production-ready (minified/compacted) artifact that can be easily served up no only helps with dev 
speed, but it also gives you a feel for how your application code is growing as you iterate.  Webpack's bundling output
is great for keeping track of this.  
  
  
* **Testing** - [[ava]]  
Having easy access to a test framework that is _**FAST**_ is a must for me.
  

* **Linting** - [[eslint]]  
Code consistency is hard enough, let's automate what we can.  A linter that can plug in any of the common code style 
guides easily is what I'm going for.
  
  
* **NPM/Node Scripts** - [[npm][npm-scripts]/[node]]  
Let's not start with any unnecessary tooling abstractions. If you're interested in a deeper dive about the why, 
read [this article][why-npm-scripts].
  
  
* **Auto Reloading** - [[webpack-hmr]]  
Saving, running a build, and reloading the page are so easy to automate these days, that this is just a great 
dev-speed bonus.  This will end up in here, probably in the [HMR][hmr] flavor.  Also, it will be opt-in via npm script
  
  
* **Code Coverage** - [[nyc]]  
This is just something that I feel can fall into the testing trap where you dig yourself a hole and then have to spend
tons of time later trying to dig yourself out.  Having this from the start seems like the way to go.

### What this boilerplate DOES NOT bring
* **Frameworks and Libraries**
Let's not tie any of those in unnecessarily, especially since this boilerplate is 
intended to be used with any frameworks and libraries.  I'd say that at best, configuring in a framework or library 
is a job for the yeoman generator version of this boilerplate to do at project creation time.
  
  
* **CSS Preprocessors**  
This really falls into the same boat as frameworks and libraries above.  Honestly, this should be up to you and/or 
your friendly yeoman generator version of this to decide.
  

## Roadmap
So I'm starting small and might even "release" versions so I can go back to previous, more basic, stages of this
boilerplate.  Here's where I plan on going with this, not necessarily in this order.

- [x] Simple index.html, single javascript file, transpiling into a tiny output bundle, with a side of sourcemaps
- [x] Image file support (bundled/moved by webpack)
- [x] CSS support (with sourcemaps)
- [x] Linting support
- [x] Editor Config support
- [x] Auto Reloading support
- [ ] Test framework support
- [ ] Code Coverage support
- [x] Production artifact build step
- [ ] Yeoman generator


[js-fatigue]:      https://medium.com/@ericclemmons/javascript-fatigue-48d4011b6fc4
[react-slingshot]: https://github.com/coryhouse/react-slingshot
[rrsk]:            https://github.com/davezuko/react-redux-starter-kit
[tc39-ecma]:       https://github.com/tc39/ecma262
[tree-shaking]:    http://www.2ality.com/2015/12/webpack-tree-shaking.html
[why-npm-scripts]: https://medium.freecodecamp.com/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8
[hmr]:             https://webpack.github.io/docs/hot-module-replacement-with-webpack.html
[babel]:           https://babeljs.io/
[webpack]:         http://webpack.github.io/
[webpack-hmr]:     https://webpack.github.io/docs/hot-module-replacement-with-webpack.html
[ava]:             https://github.com/sindresorhus/ava
[eslint]:          http://eslint.org/
[npm-scripts]:     https://docs.npmjs.com/misc/scripts
[node]:            https://nodejs.org/en/
[nyc]:             https://github.com/bcoe/nyc
