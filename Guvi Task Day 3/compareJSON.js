

// GUVI Task day 3.
// Question 1

// How to compare a two JSON have the same properties without order.
//   a. let obj1 ={name:"Person1", age: "5"};
//    b. let obj2 = {age:"5", name:"Person1"};



let obj1 = {

    name: "Person1",
    age: "5"
};

let obj2 = {
    age: "5",
    name: "Person1"

};

const jsonString1 = JSON.stringify(obj1);
const jsonString2 = JSON.stringify(obj2);

if (jsonString1 === jsonString2) {

    console.log("the properties match")
} else {
    console.log("the properties do not match")
}