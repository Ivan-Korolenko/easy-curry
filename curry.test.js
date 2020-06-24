import curry, {curryN, curryV} from './curry'

const addThreeNumbers = (a, b, c) => a + b + c

const addFourOrLessNumbers = (a, b, c, d) => (a || 0) + (b || 0) + (c || 0) + (d || 0) 

const addInfinite = (...args) => args.reduce((acc, cur) => acc + cur, 0)

const zeroArityFn = () => "zero arity"

test('curry supports all forms, including multiple arguments at a time', () => {
    expect(curry(addThreeNumbers)(1)(2)(3)).toEqual(6)
    expect(curry(addThreeNumbers)(1, 2, 3)).toEqual(6)
    expect(curry(addThreeNumbers)(1, 2)(3)).toEqual(6)
})

test('curry returns partially applied function if not all arguments are passed', () => {
    expect(curry(addThreeNumbers)(1)(2)).toBeInstanceOf(Function)
})

test('curry ignores empty argument calls', () => {
    expect(curry(addThreeNumbers)()).toBeInstanceOf(Function)
    expect(curry(addThreeNumbers)()(1)()(2)()(3)).toEqual(6)
})

test('curry does not let you call a curried function which already returned a value', () => {
    expect(() => {
        curry(addThreeNumbers)(1, 2, 3)()
    }).toThrow()
})

test('curryN fixes arity of a function, curried function returns value when it gets enough arguments', () => {
    expect(curryN(1, addInfinite)(1)).toEqual(1)
    expect(curryN(3, addInfinite)(1)(2)).toBeInstanceOf(Function)
    expect(curryN(3, addInfinite)(1)(2)(3)).toEqual(6)
})


test('variative curry works like regular curry until empty argument call', () => {
    expect(curryV(addThreeNumbers)(1)(2)(3)).toEqual(6)
    expect(curryV(addThreeNumbers)(1, 2, 3)).toEqual(6)
    expect(curryV(addThreeNumbers)(1, 2)(3)).toEqual(6)
    expect(curryV(addThreeNumbers)(1)(2)).toBeInstanceOf(Function)
})

test('variative curry runs function when called with empty argument', () => {
    expect(curryV(addFourOrLessNumbers)(1)()).toEqual(1)
    expect(curryV(addFourOrLessNumbers)(1)()).toEqual(1)
})

test('variative curry treats explicitly passed undefined as a regular argument', () => {
    expect(curryV(addFourOrLessNumbers)(1)(undefined)()).toEqual(1)
    expect(curryV(addFourOrLessNumbers)(1)(undefined)(2)()).toEqual(3)
})

test('variative curry does not let you call a curried function which already returned a value', () => {
    expect(() => {
        curryV(addFourOrLessNumbers)(1, 2, 3, 4)()()
    }).toThrow()
})

test('variative curry should support zero arity functions', () => {
    expect(curryV(zeroArityFn)()).toEqual("zero arity")
})
