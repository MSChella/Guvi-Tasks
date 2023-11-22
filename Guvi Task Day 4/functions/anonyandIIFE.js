//Question(a). print odd nos in array


// Approach 1. Using map function to loop in
let numbers = [1, 2, 3, 4, 5];
let oddNumbers = [];
numbers.map(function (number) {

    if (number % 2 !== 0) {
        oddNumbers.push(number)

    }

});
console.log(oddNumbers);

//  Approach 2. Use of filter to even simplify thereby skipping the push() and declaration of array variable

let nums = [1, 2, 3, 4, 5];

let oddNums = nums.filter(function (num) {
    return num % 2 !== 0;
});

console.log(oddNums);

// b.convert all strings to title caps in a string array
// c.sum of all nos in an Array

//Approach 1.
let nos = [3, 4, 5, 6];

let sumNum = 0;

nos.map(function (no) {
    sumNum += no

});

console.log(sumNum);

// Approach 2.
// Replacing map with reduce() to loop in and accumalate and just return the value.Simpler way!

let noms = [4, 5, 7, 8];

let sumNoms = noms.reduce(function (accumalator, current) {
    return accumalator + current;
});

console.log(sumNoms);


// d. Return all the prime numbers in the array





// e.


// f.
// g.Remove duplicates from an Array

let personalities = ['Jeff', 'Elon', 'Dhoni', 'Roger', 'Jaishankar', , 'Elon', 'Dhoni',];

let uniquePers = [];

personalities.forEach(function (ele) {

    if (!uniquePers.includes(ele)) {
        uniquePers.push(ele)
    }
});

console.log(uniquePers);

// Approach 2. best practice code without using even function, just set and spread operator
let arr = ['murugan', 'gopi', 'ravi', 'silksmitha', 'sneha', 'gopi', 'ravi', 'annamalai'];

let uniqueArr = [...new Set(arr)];

console.log(uniqueArr);



// h. Rotate an Array by k times

// Approach using IILE function()

let months = ['jan', 'feb', 'mar', 'april', 'may'];
let k = 3;

let rotateArray = function (months, k) {
    for (let i = 0; i < k; i++) {
        var movedMonths = months.pop();
        arr.unshift(movedMonths);
    }
};

rotateArray(year, k);

console.log(year);

// let year = ['2020', '2021', '2022', '2023', '2024'];

// let k1 = 3;
// for (let i = 0; i < k1; i++) {

//     var movedEle = year.pop();
//     year.unshift(movedEle);
// }
// console.log(year);

