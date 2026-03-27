console.log("We are using javascript")

//variables
const name = "HOC"               //fix value  we can not change
var surname = "tech"            // global change anywhere in file   
let middlename = "Solutions" 


//function
 
//Normal function
function getMyName(){
    console.log("function 1")
}
getMyName()

//Arrow function
const getyYourName = () =>{
     console.log("function 2")
}
getyYourName()



//parameter
const getMyFullName = (data = "No name") => {
     console.log("My Full name", data)
}

const MyName = "mayuri"
getMyFullName(MyName)

const test = "mayuri kumbhar"
getMyFullName(test)

getMyFullName()



//Array - index   0       1         2          3       
const items =["test 1", "test 2", "test 3", "test 4"]

console.log(items, "Array of items")
console.log(items[0], "-print only index 0 -(first value)")


//Object
const studentDetails = {
//  key     value 
    name : "Mayuri",
    city : "karad"
}

console.log(studentDetails, " - studentDetails full object")
console.log(studentDetails.name, " - studentDetails name")