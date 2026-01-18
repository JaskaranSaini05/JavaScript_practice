// object literals

const mySym = Symbol("key1")
const JsUser = {
   name : "Hitesh",
   age:18,
   [mySym] :"mykey",
   location: "Ludhiana",
   email:"hitesh@gmail.com",
}

console.log(JsUser.email);
console.log(JsUser["email"])
console.log(typeof JsUser[mySym])
JsUser.greeting = function () {
  console.log(`Hello Js user ${this.name}`);
};

JsUser.greeting();
