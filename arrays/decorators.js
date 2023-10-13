let memoDecorator = function(func) {
    let cache = newMap()

    return function(x) {
        if(cache.hax(x)) {
            return cache.get(x)
        }

        let result = func(x)

        cache.set(x, result)
        return result
    }
}