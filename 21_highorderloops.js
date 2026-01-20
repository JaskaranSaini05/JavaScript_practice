//for of loop

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
    
}

const greetings = "hello world"
for (const greet of greetings) {
    console.log(greet)
    
}

// Maps

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")

console.log(map);

for (const [key,value] of map) {
    console.log(key);
}

// for in

const myObject = {
    js:"JavaScript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
}

for (const key in myObject) {
    console.log(myObject[key]);
    
}

const coding = ["js","ruby","python","java"]

coding.forEach(function (val) {
console.log(val);
})