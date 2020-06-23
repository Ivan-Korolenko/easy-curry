const curry = (fn) => 
    function curried(...args) {
        const souldRunRightNow = args.length === 0  
        const haveEnoughArgs = args.length >= fn.length        
        if (haveEnoughArgs || souldRunRightNow) return fn(...args)
        else return (...moreArgs) => curried(...args.concat(moreArgs))
    }

export default curry
