let promise = new Promise( 
    function(resolve, reject){
        setTimeout(() => {
            resolve('any text')
        }, 5000);
    }
)
promise.then(function (text) {
    console.log(text);
})