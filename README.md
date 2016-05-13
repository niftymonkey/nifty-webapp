# Web App Boilerplate

[![Join the chat at https://gitter.im/niftymonkey/nifty-webapp](https://badges.gitter.im/niftymonkey/nifty-webapp.svg)](https://gitter.im/niftymonkey/nifty-webapp?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
  
> Because we all really just wanna get right down to building an app, with zero upfront bullshit tooling setup cost.  

This boilerplate is intended to find a sweet spot between barebones for building a maintainable web application 
and not having the-kitchen-sink thrown in from the start.
   
## Features
Here's what comes automagically from the static version of this boilerplate.

- Simple html/javascript example files transpiled into tiny output bundles (with sourcemaps)  
- Image file support (bundled/moved by webpack)  
- CSS support (with sourcemaps)  
- Linting support  
- Editor Config support  
- Auto Reloading support  
- Production artifact build step  
- [Yeoman generator][nwa-generator]
  
  
## Usage

### Yeoman
If you want this base boilerplate, but you'd also like to some of the options mentioned below in the **Options** 
category, you should look at using the [Yeoman][yo] version of this boilerplate:  [generator-nifty-webapp][nwa-generator]

### Git
If the "Must Have's" below are all you need, you can either use the yeoman generator option above (hitting enter on any
of the optional defaults), or you can do the following:

1. Clone this repo
2. Change the relevant bits in package.json
3. Run the following: `npm i && npm start`
4. Open `http://localhost:3000`

  
---------------------------------------


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
so that you can choose what technologies you want when the time is right.  Even the "Must Have's" I choose here are items 
that I'd probably want to eventually make configurable to some degree.
  
  
3. **Documentation**  
This means having a boilerplate that's easy to walk through, has information about what each of the dev dependencies
is for, and that has meaningful comments so that the whole thing doesn't just become a big pile of magic.
  
  
### Must Haves
* **Transpiling** - [[babel]]  
We're [continually getting more][tc39-ecma] features and language improvements and as a result, one of the the first 
things I want to do is have the ability to write code in the most recent version of the language ... and have that 
transpiled down into browser-ready javascript for me.  Babel is what's getting me there.
  
  
* **Small Size** - [[webpack]]  
One of my biggest pet peeves when starting a new project writing the first few lines, transpiling it down, and seeing a 
ridiculously large bundle come out the other end.  So, this boilerplate will always emit bundles that have the 
**smallest footprint possible**. 

  * While I'd love to start with the ability to drop it down another notch with [tree-shaking][tree-shaking], this is 
    only supported in the 2.x version of webpack which currently is still in beta. Also, webpack's 2.x documentation
    is still lacking.  Will pull that in when it's better supported/documented.
  
  
* **Debugging** - [[webpack]]  
If I can't make use of the debugging tools available to me right from the start, that's a deal-breaker. As a result, 
sourcemaps are a requirement here.  
  
  
* **Auto Reloading** - [[webpack-hmr]]  
Saving, running a build, and reloading the page are so easy to automate these days, that this is just a great 
dev-speed bonus.  This will be opt-in via build script target.
  
  
* **Linting / Editor Config** - [[eslint]]  
Code consistency is hard enough, let's automate what we can.  Using a linter that supports plugging in the common code 
style rules/presets.  As an additional consistency aid, I'm putting in an [editor config][ec] file that can be easily 
modified to fit your project's needs.
  
  
* **Production-Ready from the start** - [[webpack]]  
Having a singular production-ready (minified/compacted) artifact that can be easily served up right at project creation 
is not only a dev speed bonus, but it also gives you a feel for how your application code is growing as you iterate.  
Webpack's bundling output is great for keeping track of this size.  
  
  
* **NPM/Node Scripts** - [[npm][npm-scripts]/[node]]  
Let's not start with any unnecessary tooling abstractions. If you're interested in a deeper dive about the why, 
read [this article][why-npm-scripts].
  
  
### Options
The following things are items that I'm not intending to put into this boilerplate by default.  However, some of my 
favorite options will end up in the [generator][nwa-generator] version of this boilerplate.

* **Frameworks and Libraries**  
This boilerplate is intended to be used with any number of frameworks and libraries, so I'm leaving this kinda stuff out 
of the base.  For some of the more popular frameworks and libraries, however, I'll likely end up adding them as options 
to the [generator][nwa-generator].
  
  
* **CSS Preprocessors**  
Trying different CSS preprocessors to get a feel for them is a pretty regular learning task for me.  As a results, I'd 
like to make this decision at project creation time via the [generator][nwa-generator]. 
  

* **Testing**  
Having easy access to a test framework that is _**FAST**_ is a must for me.  I originally was going to put this in the 
base boilerplate. But because this lib choice can be a contentious decision (assertion syntax and browser compatibility 
for instance) I'm going to leave this out of the static boilerplate and supply my favorite options in the [generator][nwa-generator].
  
  
* **Code Coverage**  
This is another one that I feel follows along the lines of the **Testing** reasoning above.  It feels like a must, but
library (and potentially service) choice is something that should probably be made on a per-project basis.  Again 
[generator][nwa-generator]!


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
[eslint]:          http://eslint.org/
[npm-scripts]:     https://docs.npmjs.com/misc/scripts
[node]:            https://nodejs.org/en/
[ec]:              http://editorconfig.org/
[yo]:              https://github.com/yeoman/yo
[nwa-generator]:   https://github.com/niftymonkey/generator-nifty-webapp
