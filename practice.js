
let result = document.getElementById("result")
let btn = document.getElementById("Btn")
let label = document.getElementsByClassName("answer")

let k = 6 //let - block in a fucntion var - exists in the whole function

//++ - ALREADY RETURNED
//we should HAVE what to increment
function labels(){  //1 3 ++k after incrementing  
   --k  // 0 2 k++ before incremenenting     k-- === k-=1
}
//0 1 
// 2 3 

//<=1 anxious 
function counter(){   // ? : ONLY IF ELSE
   k <= 1  ? this.innerHTML = `Test ${Test.numberOfTest} is ${Test.finished[0]}. Your type is ${Test.type[1]}` 
   : this.innerHTML = `${Test.numberOfTest} is ${Test.finished[0]}. Your type is ${Test.type[0]}`
}

function clear(){
    return this.innerHTML = `END OF
     THE TEST`
}

let Test = new Object(
    {
        numberOfTest: 1,
        finished: ["finished","Test is not finished yet"],
        type: ["sensitive","anxious"],
        similarTests: [`Test - Personality Type`, `Test - Emotional IQ`],
        socialMedia : ["Instagram","Telegram","Riddle", "Facebook","Twitter (feat. Elon Mask)","TikTok"],
        email: "gmail",
        sendToEmployer: ["LinkedIn","Indeed"]
})


const person = {
    name: " Elizaveta",
    greeting: ", similar tests: "
}

const ads = {
      ads: "Here can be your ads!"
}

function similarTests(){
   // if (person.hasOwnProperty(keys)){
   setTimeout(() => {
      for (let keys in this) {
      result.innerHTML += this[keys]
      }
   }, 5000)
// }
}

similarTests.call(ads)

let similar = similarTests.bind(person)
similar()




// setTimeout(()=> {
//    similarTests()
// }, 5000)

btn.addEventListener("click",counter)
btn.addEventListener("dblclick",clear)





