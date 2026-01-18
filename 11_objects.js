///const tinderUser = new Object()
const tinderUser={}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"jaskaran",
            lastname:"singh",
        }
    }
}
console.log(regularUser);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

const obj3 = Object.assign({},obj1,obj2)
console.log(obj3)

const obj4 = {...obj1, ...obj2}
console.log(obj4)

const course = {
    coursename: "Javascript in hinid",
    price: "999",
    courseInstructor:"hitesh"
}
course.courseInstructor

const {courseInstructor} = course
console.log(courseInstructor);