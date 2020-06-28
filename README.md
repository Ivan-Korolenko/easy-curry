# Easy curry. Just what you need. 

[![minzipped size](https://badgen.net/bundlephobia/minzip/easy-curry)](https://badgen.net/bundlephobia/minzip/easy-curry)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)

Only small and simple curry functions. Nothing more.

## Why?
If you don't know what currying is or what it's youseful for, you can read a quick guide here:
https://medium.com/@ivankorolenko/how-to-quickly-understand-currying-in-javascript-7a3875f3fde6

## Why easy-curry?
✔️ Only what you need

✔️ No dependencies

✔️ Modular

✔️ Tree-shakable

✔️ Small size: 275 bytes minified and gzipped

✔️ Thoroughly covered with tests

✔️ Any number of arguments at a time

✔️ Partial application

✔️ Variadic functions currying

✔️ Easy to read code. You can understand what you're using

✔️ Install any way you like: NPM, CDN, manual import

## Getting Started
### NPM
Add this library to your project using NPM

```
npm i easy-curry
```

import what you need

```
import {curry} from 'easy-curry'
```

and use it
```
const add = (a, b) => a + b
console.log(curry(add)(2)(2))
```

### CDN
Add this code to your HTML
```
<script src="https://cdn.jsdelivr.net/npm/easy-curry/curry.min.js"></script>
```
and use it
```
<script>
    const add = (a, b) => a + b
    console.log(curry(add)(2)(2))
</script>
```

### Manually
Download curry.min.js from this repository to your project's folder and use it
```
<script src="curry.min.js"></script>
<script>
    const add = (a, b) => a + b
    console.log(curry(add)(2)(2))
</script>
```

## How to use
You can import any function you need separately.

```import {curry, curryN, curryV} from 'easy-curry'```

This library has no default export. [Why it's a good thing](https://humanwhocodes.com/blog/2019/01/stop-using-default-exports-javascript-module/)

```curry``` - classical currying. Creates a sequence of functions that corresponds to passed function's arity

```curryN``` - curryies a function to fixed arity

```curryV``` - variadic currying. Enhanced version of classical currying. Curried function supports termination (early value return), meaning it can be called before receiving the full set of arguments using empty argument call.

Examples of usage:
- curry(someFuncion(1)(2)(3))
- curry(someFuncion(1, 2, 3))
- curry(someFuncion(1, 2)(3))
- curry(someFuncion(1)(2)) 
- curryN(1, someFuncion(1))
- curryV(someFuncion(1)(2)())
