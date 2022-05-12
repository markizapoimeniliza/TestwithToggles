// const person = new Object(

// )

// const person = {

// }


//object create(prototype, {specific properties})


const person2 = {
    height: 171 , 
    weight: 42
}

//prototype //specific fields
const person = Object.create({ //can be another object OR ANYTHING
 person2
},{
    //propert
    name: {    //private data
        //key
               //value
        value: "Elizaveta",   // the same as dot notation but in one place
        enumerable: true, //output
        writable: true, //can reassign it
        configurable: true //can delete
    },
    birthYear: {
        value: 2003,
        enumerable: true,
        configurable: true
    },
    age: {   //encapsulation + counting  //DYNAMIC
        get(){
            //  return "mommy"
            return new Date().getFullYear() - this.birthYear //return new Date object
            },
        set(value){ 
            document.body.style.background = "pink"
            console.log(`Set age ${value}`)
        } 
    }
}
)

// const person = {
//     name: "Elizaveta", //not enumerable
//     lastName: "Vakhlakova", //not enumerable 
//     birthDate: 2003
// }
// console.log(person)


// console.log(person)




//for .. in
for (let keys in person){
    // if(person.hasOwnProperty(keys))
    {   //hasOwnProperty  
        console.log(person[keys])
     } //object[key]
}

//countable - not infinite
//emnumerable - infinite

//for of ?


//enumerable - false default 
//[key] - inside key
//key - key itself



//iterable vs enumerable


//delete ONLY on console


//EVERYTHING IN JS IS AN OBJECT!


//encapsulation = safe wrap


//constructor w/ NEW keyword



