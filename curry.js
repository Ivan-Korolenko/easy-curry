// Curries function to a fixed arity
export const curryN = (n, fn) => 
    function curried(...args) {
        const haveEnoughArgs = args.length >= n
        const partiallyApplied = (...moreArgs) => curried(...args.concat(moreArgs))
        
        if (haveEnoughArgs) return fn(...args)
        return partiallyApplied
    }

// Regular curry is just a special case of curryN, where n = function's arity
export const curry = (fn) => curryN(fn.length, fn)

// CurryV is a enhanced version of curry. Supports termination (early value return) through empty argument call
export const curryV = (fn) =>     
    function curried(...args) {
        let shouldRunRightNow = args.length === 0 
        const haveEnoughArgs = args.length >= fn.length        
        const partiallyApplied = (...moreArgs) => {
            shouldRunRightNow = moreArgs.length === 0 

            if (shouldRunRightNow) return fn(...args) 
            return curried(...args.concat(moreArgs))
        }
            
        if (haveEnoughArgs || shouldRunRightNow) return fn(...args)        
        return partiallyApplied    
    }
