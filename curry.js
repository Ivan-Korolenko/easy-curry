const curry = (fn) => 
    function curried(...args) {
        const haveEnoughArgs = args.length >= fn.length
        const partiallyApplied = (...moreArgs) => curried(...args.concat(moreArgs))
        
        if (haveEnoughArgs) return fn(...args)
        else return partiallyApplied
    }

export default curry
