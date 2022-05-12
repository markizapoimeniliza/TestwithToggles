//bind

var object = {
    age: 23
}


//ANY OBJECT
function GrownUp(a,b){
    console.log(`Grown-up for ${this.age - 18} years ${a+b}`)
}

let sth = GrownUp.bind(object,2,3)
sth()

//apply
// var object = {
//     age: 23
// }

// function GrownUp(a,b){
//     console.log(`Grown-up for ${this.age - 18} years ${a,b}`)
// }

// GrownUp.apply(object,[2,3]) //immediately



// //call
// // posses to an Object (immitate)

// var object = {
//     age: 23
// }

// function GrownUp(a,b){
//     console.log(`Grown-up for ${this.age - 18} years ${a,b}`)
// }

// GrownUp.call(object,2,3) //immediately
//output





//this - refers to an object



//functions - OBJECT 


//null , undefined , strings, numbers, boolean, and symbols.




//call>apply>bind if object the same









