//javaScript
//React js
//Node js
const { rejects } = require("node:assert")
//const { get } = require("mongoose")

// Synchronous and asynchronous
//Callbacks
//Promise
//async/await

// 1.set timeout

//console.log(1)
//console.log(11)

//setTimeout(() => {
//   console.log(2)
//  }, 1000)

//console.log(3)

//1. Callbacks
const getData = (callBackFunction) => {
    console.log("Hello Get data")
    callBackFunction()
}
getData(() => console.log(12323))

//const callBackFunction = () => {
//    console.log("callBack function called")
//}
//getData(callBackFunction)


//2. Promises --- resolve  pending  reject 

const myPromise = new Promise((resolve, reject) => {
    const error = false

    if (error == true) {
        resolve("Promise Rejected")
    }
    else {
        reject("Promise Resolved")
    }
})

myPromise.then((res) => console.log(res)).catch((error) => console.log(error))

//3. async/await 
const myFunction = async () =>{
}

// API integration 
//DB call- add delete update get from DB- await