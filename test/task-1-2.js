// let promise = new Promise( 
//     function(resolve, reject){
//         setTimeout(() => {
//             resolve('any text')
//         }, 5000);
//     }
// )
// promise.then(function (text) {
//     console.log(text);
// })


function getRandom(){
    return Math.floor(Math.random() * 5 )
}


let promise = new Promise((resolve, reject) =>{
    let random = getRandom()
    let result = 1 / random 
    if(random === 0){
        reject('Error 404')
    }else {
        resolve(1 / random)
    }
})

promise.then(function(result){
    console.log(result);
})

promise.catch(function(err){
    console.log(err);
})