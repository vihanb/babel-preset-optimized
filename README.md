# babel-preset-optimzed
This is a collection of presets which (should) result in optimized code. It is reccomended to avoid using the preset for development as it may strip out some warnings, but that is not required.
See below for configuration

This is a list of plugins this uses. Do note that by default, not all of these may run:

 - [babel-plugin-minify-constant-folding](https://github.com/babel/minify/tree/master/packages/babel-plugin-minify-constant-folding)
 - [babel-plugin-loop-optimizer](https://github.com/vihanb/babel-plugin-loop-optimizer)
 - [babel-plugin-closure-elimination](https://github.com/codemix/babel-plugin-closure-elimination)
 - [babel-plugin-tailcall-optimization](https://github.com/krzkaczor/babel-plugin-tailcall-optimization)

This may be expanded in the future, feel free to send a PR too

## Installation

```sh
$ npm install babel-preset-optimzed
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "presets": ["optimzed"]
}
```

### Via CLI

```sh
$ babel --presets optimzed script.js
```

### Via Node API

```javascript
require('babel').transform('code', {
  presets: ['optimzed']
});
```

## Configuration
By default, not all optimizations are run. You have to set certain configurations to allow some optimizations to be run. You can set this options object by changing `'optimized'` (in the `presets:` array) to `['optimized' { ... options ... }]`

### Unsafe Optimizations

     unsafe: true

This enables optimizations which would otherwise result in code with slightly different behavior. This includes:

 - [babel-plugin-loop-optimizer](https://github.com/vihanb/babel-plugin-loop-optimizer
 ): See the repository for information about what it does.

