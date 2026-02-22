import 'bootstrap/dist/css/bootstrap.min.css';
import DetailsCards from './components/DetailsCards';
import CardTitle from 'react-bootstrap/esm/CardTitle';

export const App = () => {

// Javascript
console.log("HOC");

// Variable
const name = "Mayuri";
let age = 19;
console.log(name , "---");
console.log(age , '--');

//string
const a = "HOC Solution LTD";
console.log( a , "==");

//Array 
const b =["abc" , "xyz" , "pqr" , 3333];
console.log( b , "==");

//Object
const data ={
     name: "Test" ,
     city: "Pune" ,
};


// if else
const fullname = "Mayuri"
if(fullname == "hello"){
console.log(true)
} 
else{
console.log(false)
}

//function 
function addNumber(){
console.log("Click")
}

// Arrays of Object
const cardData = [
{
  CardTitle: "Test 1",
  CardDiscription: "Test Description 1"
},

{
  CardTitle: "Test 2",
  CardDiscription: "Test Description 2"
},

{
  CardTitle: "Test 3",
  CardDiscription: "Test Description 3"
},

{
  CardTitle: "Test 4",
  CardDiscription: "Test Description 4"
},

{
  CardTitle: "Test 5",
  CardDiscription: "Test Description 5"
},
];
console.log(cardData,"---")

  return (
    <>
      <button className='btn btn-primary' onClick={addNumber}>Click Me</button>
      <div className='container'>
        <div className="row my-2">

          { cardData.map((each) => ( 
          <div className="col-md-3 my-2">
            <DetailsCards 
            CardTitle= {each.CardTitle} 
            CardDiscription={each.CardDiscription} />
          </div>
          ))} 
        </div>
      </div>
    </>
  );
};

export default App;

