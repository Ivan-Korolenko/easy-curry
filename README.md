# Easy curry. Just what you need. 
Only small and simple curry functions. Nothing extra

## What is currying?
Quick guide here:
https://medium.com/@ivankorolenko/how-to-quickly-understand-currying-in-javascript-7a3875f3fde6

## Why easy-curry?
✔️ Code is easy to read. You can easily understand what you're using

✔️ Multiple types of currying: classic, to fixed arity, variadic

✔️ Can be used in a TypeScript project (.d.ts file included)

✔️ Size: 275 bytes (minified and gzipped)

✔️ No dependencies

## Getting Started
### NPM
Add this library to your project using NPM

```
npm i easy-curry
```

import what you need

```
import { curry } from 'easy-curry';
```

and use it
```
const add = (a, b) => a + b;
curry(add)(2)(2);
```

### CDN
Add this code to your HTML
```
<script src="https://cdn.jsdelivr.net/npm/easy-curry/curry.min.js"></script>
```
and use it
```
<script>
    const add = (a, b) => a + b;
    curry(add)(2)(2);
</script>
```

### Manually
Download curry.min.js from this repository to your project's folder and use it
```
<script src="./curry.min.js"></script>
<script>
    const add = (a, b) => a + b;
    curry(add)(2)(2);
</script>
```

## How to use
You can import any function you need separately.

```import { curry, curryN, curryV } from 'easy-curry'```

This library has no default export. [Why it's a good thing](https://humanwhocodes.com/blog/2019/01/stop-using-default-exports-javascript-module/)

```curry``` - classic currying. Creates a sequence of functions that corresponds to passed function's arity

```curryN``` - curries a function to fixed arity

```curryV``` - variadic currying. Enhanced version of classic currying. Curried function supports termination (early value return), meaning it can be called before receiving the full set of arguments using empty argument call.

Examples:
- curry(someFunction)(1)(2)(3)
- curry(someFunction)(1, 2, 3)
- curry(someFunction)(1, 2)(3)
- curry(someFunction)(1)(2)
- curryN(1, someFunction)(1)
- curryV(someFunction)(1)(2)()
