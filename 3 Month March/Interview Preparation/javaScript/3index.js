//1. Spread operator - ...(3 dots)
    // used for array and object          
    // expand elements - we can add new elements to the array and object 
const array1 = [1,2,3] 
const array2 = [4,5,6]

const FinalArray = [...array1 , ...array2];
console.log(FinalArray)


//2. Rest Operator - ... (3 dots)
   //we can pass n numbers of arguments
function num(...numbers){
    console.log(numbers);
    return numbers   //.reduce((a,b) => a+b);
}
console.log(num(1,2,3,45,85));   


//3. closures - nested function
function mainFunction(){
    let name = "Hoc"
    function nestedFunction(){
        console.log(name)
        let age = 19
        console.log(age)
    }
    return nestedFunction();
}
console.log(mainFunction());


//4. Immediately-Invoked function Expression(IIFE)
     //we can write function without function name
;(function(){
   console.log("Immediately-Invoked function")
})();

//5. self-Invoked function 
     //we can write function without function name
;(function(){
   console.log("self-Invoked function")
})();
