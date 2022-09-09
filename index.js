function receivesAFunction(callback){
    return callback();
}

function returnsANamedFunction(){
    return function myNamedFunction(){
        return "hello world"
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        return "confused"
    }
}