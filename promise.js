// function maxValue(x) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (x > 10) resolve("${x} is greater than 10");
//             else reject("${x} is smaller than 10");
//         }, 3000);
//     });
// }

// maxValue(25).then(success).catch(failure);

// function success(value) {
//     console.log("Success:${value}");
// }

// function failure(error) {
//     console.error("Error:${error}");
// }


// let prom1 = new Promise((resolve, reject) => {
//     resolve("Prom1 is success")
// })

// let prom2 = new Promise((resolve, reject) => {
//     resolve("Prom2 is success")
// })
// let prom3 = new Promise((resolve, reject) => {
//     reject("Prom3 is rejected")
// })
// let prom4 = new Promise((resolve, reject) => {
//     resolve("Prom4 is success")
// })

// Promise.all([prom1, prom2, prom3, prom4])
//     .then(value => console.log('success:${value}'))
//     .catch(error => console.error('error:${error}'))

