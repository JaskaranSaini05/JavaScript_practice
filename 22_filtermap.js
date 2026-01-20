const coding = ["js","ruby","python"]
const values = coding.forEach((item) => {
    console.log(item);
    return item
})
console.log(values);

// filter operation
const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter((num) => num > 5 )
console.log(newNums);


// reduce
const myNumss = [1, 2, 3];

const myTotal = myNums.reduce(function (acc, currval) {
  return acc + currval;
}, 0);

console.log(myTotal); // 6
