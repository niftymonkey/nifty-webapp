# Web App Boilerplate
  
Because we all really just wanna get right down to building an app, with zero upfront bullshit tooling setup cost.

## tl;dr
This boilerplate is intended to find a sweet spot between fundamentals for building a maintainable web application 
and not having the-kitchen-sink thrown in from the start.
   

## Usage
To use this boilerplate as a basis for a new application:

1. Clone this repo
2. Change the relevant bits in package.json
3. Run the following:
```
    npm run build
```
    
This will transpile the source into the `dist/` directory and also copy over any relevant static files.  Then you can
just open the `index.html` file in that directory and see the app in action.

And that's it!  Look at `src/js/index.js` to modify/replace the javascript with your own.  
  

## Motivation
So we've all been feeling the [javascript fatigue][1] in web development.  After starting a bunch of side projects to 
learn technologies, frameworks, and libraries, I found myself performing the same setup over and over again. I tried using
quite a few of the many static boilerplates and yeoman generators out there ... some of which are VERY well put together. 
However, I always found myself wanting slightly more of control over what got dropped in for any given project.  I will 
likely be borrowing some of my favorite concepts from some of these [other][2] [boilerplates][3].

## Requirements
To be clear about what I'm attempting to do here, and how it might differ from some of the other boilerplates, I'll list 
some of the requirements (driving principles?) behind my choices for this particular boilerplate.

### Dev Speed
This is really what all of this is about.  Ultimately, we want to just write the code that matters, and we want to get
at doing that ASAP.  Here's what tends to get me there the fastest.
  
#### Needs  
* **Transpiling** - _I'm pretty sure I'm gonna be transpiling for a good while_  
`Babel` - With es6/es2015, JavaScript is finally getting some of the love it has been needing for a long time. 
[TC39][4] is continually working to add more features into the language and as a result, one of the the first things I
want to do is have the ability to write code in the most recent version of the language ... and have that transpiled 
down into browser-ready javascript for me.  Babel is what's getting me there.
  
  
* **Size Matters** - _Nobody wants to write a tiny web app that transpiles into a 2MB bundle_  
`Webpack` - One of my biggest pet peeves about the javascript tooling fatigue thing is that you setup your stack and write your 
first "Hello World" line of code and you somehow end up with a transpiled bundle that is ridiculously large.  WTF?  So, the
starting point here will always emit a bundle that has the **smallest footprint possible**. 

  * Having a singular production-ready (minified/compacted) artifact that can be easily served up really helps the dev
    speed thing.
  * Additionally, I am starting with Webpack 2 to give me the ability to drop it down another notch with
    [tree-shaking][5] if I so choose.
  
  
* **Debugging** - _DevTools are essential. `console.log` for everything is unacceptable_  
`Webpack` - If I can't make use of the debugging tools available to me right from the start, that's a deal-breaker. As a result, 
sourcemaps are a requirement here.
  
  
* **Testing** - _I don't always test my code, but when I do ..._  
TBD - Ok yeah, I really do always _intend_ to test my code.  Having easy access to a test framework that is _**FAST**_ is 
a must for me.
    

* **Linting** - _Code consistency is hard enough, let's automate what we can_  
`ESLint` - There's so much real stuff to care about in a project.  Bickering about code style shouldn't be at the top of that
list.  Using a linter here that can plug in any of the common code style guides easily
  
  
*  **NPM/Node Scripts instead of task runners** - _Let's keep it simple_  
`npm` / `node` - Really, there's just no __need__ for that abstraction anymore.  If you're interested in a deeper dive about 
the why, read [this article][6].
  
  
#### Wants
* **Auto Reloading** - _Because `F5` is fo suckas_  
Saving, running a build, and reloading the page are so easy to automate these days, that this is just a great dev-speed
bonus.  This will end up in here, probably in the [HMR][7] flavor.
  
  
* **Code Coverage** - _Because projects get large and unwieldy_  
This is just something that I feel can fall into the testing trap where you dig yourself a hole and then have to spend
tons of time later trying to dig yourself out.  Having this from the start seems like the way to go.


#### DIY after you start
* **Frameworks and Libraries** - _React, Redux, lodash, and fetch ... what else would anyone use, right?_  
Sure I'm on a React kick right now, but who knows when that's gonnna change.  Let's not tie it in unnecessarily.
  
  
* **CSS Preprocessors** - _You know you're gonna use one ..._  
LESS and SASS are solid and mature.  But then there's PostCSS picking up steam.  Meh, you decide whatever you want.
  

## Roadmap
So I'm starting small and might even "release" versions so I can go back to previous, more basic, stages of this
boilerplate.  Here's where I plan on going with this, not necessarily in this order.

- [x] Simple index.html, single javascript file, transpiling into a tiny output bundle, with a side of sourcemaps
- [ ] Auto Reloading
- [ ] Linting support
- [ ] Test framework support
- [ ] Code Coverage support
- [ ] Production artifact build step
- [ ] Yeoman generator


[1]:https://medium.com/@ericclemmons/javascript-fatigue-48d4011b6fc4
[2]:https://github.com/coryhouse/react-slingshot
[3]:https://github.com/davezuko/react-redux-starter-kit
[4]:http://www.ecma-international.org/memento/TC39.htm
[5]:http://www.2ality.com/2015/12/webpack-tree-shaking.html
[6]:https://medium.freecodecamp.com/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8
[7]:https://webpack.github.io/docs/hot-module-replacement-with-webpack.html

