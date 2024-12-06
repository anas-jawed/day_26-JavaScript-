// //  Assyn Keyword

// // async function greet() {
// //     // throw "404 page not found";
// //     return " hello";
// // }

// // greet()
// // .then((result) => {
// //     console.log("promise was filed", result);
// // })
// // .catch((err) => {
// //     console.log("promised with rejeted with err", err);
// // })

// // let hello = async (params) => {
// //     throw "404 page not found";
// //     return "hello";
// // }

// // hello().then((result) => {
// //     console.log("promised was fullfilled");
// //     console.log("result was", result);
// // })
// // .catch((err) => {
// //     console.log("promise was rejected with err :", err);
// // })



// // function getNum(){
// //     return new Promise((resolve, reject) => {
// //         setTimeout(() =>{
// //             let num = Math.floor(Math.random() *10) +1;
// //            console.log(num);
// //            resolve();
// //         }, 2000);
// //     });
// // };

// // async function demo(params) {
// //     await getNum();
// //     await getNum();
// //     await getNum();
// //     await getNum();
// //     await getNum();


// // }

// // console.log(demo());

// h1 = document.querySelector("h1");
// function changeColor(color, delay){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             h1.style.color = color;
//             console.log(`Color was chnaged by ${color}`);
//             resolve("color was changed");
//         }, delay);
//     })
// }

// async function  demo(params) {
//     try{
//         await changeColor("red", 1000);
//         await changeColor("orange", 1000);
//         await changeColor("blue", 1000);
//         await changeColor("green", 1000);
//         await changeColor("black", 1000);
    
//     } catch(err){
//     console.log(err);
//     }

//     console.log(5+7);
    

// };

// demo();

//  Convert a data into json and js object

// let jsonOnj = `{"fact":"The largest cat breed is the Ragdoll. Male Ragdolls weigh between 12 and 20 lbs (5.4-9.0 k). Females weigh between 10 and 15 lbs (4.5-6.8 k).","length":141}`;

// let validjson = JSON.parse(jsonOnj);
// console.log(validjson.fact);


// let student = {
//     fname: "Anas",
//     lname: "Jawaid",
//     cast: "Kamboh",
//     marks: "96"
// };


// console.log(JSON.stringify(student));

let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((res) =>{
// return res.json();    
// })
// .then((data) =>{
//     console.log("data1", data.fact);
//     return fetch(url);
// })
// .then((res) => {
//     return res.json();
// })
// .then((data2) => {
//     console.log("data2", data2.fact);
// })
// .catch((err) =>{
// console.log(err);
// })


// async function name(params) {
//    try{
//     let res = await fetch(url);
//     let data =  await res.json();
//     console.log(data.fact);
//     let res1 = await fetch(url);
//     let data1 =  await res1.json();
//     console.log(data1.fact);
//    }
//    catch (err){
//      console.log("err", err);
//    }
    
// }

console.log(name());