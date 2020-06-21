# easy-curry
Only a small and simple curry function. Nothing extra.

Supports any number of arguments and partial application. 

Examples of usage:
- curry(someFuncion(1)(2)(3))
- curry(someFuncion(1, 2, 3))
- curry(someFuncion(1, 2)(3))
- curry(someFuncion(1)(2))
- etc.

## Why?
If you don't know what currying is or what it's youseful for, you can read a quick guide here:
https://medium.com/@ivankorolenko/how-to-quickly-understand-currying-in-javascript-7a3875f3fde6

## Installation
### NPM
Add package using NPM:

```npm i easy-curry```

And then import it in your project:

```import curry from 'easy-curry'```


### Manually
Download curry.min.js from this repository to your project's folder and use it like this:

```
<script src="curry.min.js"></script>
<script>curry(someFunction)</script>
```
