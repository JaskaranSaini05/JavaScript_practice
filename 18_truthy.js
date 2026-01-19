const userEmail = "h@hitesh.ai"

if (userEmail){
    console.log("Got User Email");
}
else{
    console.log("Do not have user email");
}

// falsy values

// example of falsy values => false,0,-0,BigInt,0n,"",null,undefined,Nan(Not a Number)

//Truthy values =>means any value becomes true when used in an if condition

// example of truthy values => "0",'false'," ", [],{},function(){}


//Nullish Coalescing Operator (??): null defined
//Nullish Coalescing Operator (??) means 
 //“If the value is null or undefined, then use the default value.”
let val1;
//val1 = 5 ?? 10
val1 = null ?? 10
console.log(val1);


// Ternanry Operator 

//condition ? true : false

const iceTeaPrice = 100 
iceTeaPrice >=80 ? console.log("less than 80") : console.log("more than 80")
