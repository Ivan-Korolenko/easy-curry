// Curries function to a fixed arity
export function curryN(n: number, fn: Function): Function;

// Regular curry is just a special case of curryN, where n = function's arity
export function curry(fn: Function): Function;

// CurryV is a enhanced version of curry. Supports termination (early value return) through empty argument call
export function curryV(fn: Function): Function;
