# easy-curry
Only a small and simple curry function. Nothing extra.

Supports any number of arguments and partial application. 

Examples of usage:
- curry(someFuncion(1)(2)(3))
- curry(someFuncion(1, 2, 3))
- curry(someFuncion(1, 2)(3))
- curry(someFuncion(1)(2))
- etc.

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
