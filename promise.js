//Async -> always returns a promise.
//Await -> pauses the execution of its surrounding async function until the promise is settled.
async function hello(){
    console.log('hello');
}

function api() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('Weather data');
            resolve(200);
        },2000);
    });
}

async function getWeatherData(){
    console.log('Getting data 1......');
    await api(1); //1st call
    console.log('Getting data 2......');
    await api(2); //2nd call
    console.log('Getting data 3......');
    await api(3); //3nd call
    console.log('Getting data 4......');
    await api(4); //4nd call
}


function getData(dataId){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('data', dataId);
            resolve('success');
        }, 2000);
    });
}

// //Promise chain
// function asyncFunc1(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             console.log('some data1');
//             resolve('success');
//         }, 4000);
//     });
// }


// function asyncFunc2(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             console.log('some data2');
//             resolve('success');
//         }, 4000);
//     });
// }

// console.log('fetching data1...');
// asyncFunc1().then((res) => {
//     console.log('fetching data2...');
// asyncFunc2().then((res) => {});
// });

// // let promise = new Promise((resolve,reject) => {
// //     console.log('I am a promise');
// //     resolve(321);
// //     //reject('some error')
// // })

// //States of promises -> Pending, fulfilled[resolved], rejected.

// /*
// function getData(dataID, genNextData){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('data', dataID);
//             resolve('success')
//             if(genNextData){
//                 genNextData();
//             }
//         },7000)
//     });
// }
// */

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log('I am a promise');
//        // resolve('success');
//        reject(' network error');
//     });
// };
// //promise fullfill
// let promsie = getPromise();
// promise.then((res) => {
//     console.log('Promise fulfilled',res);
// });
// //promise reject
// promsie.catch((err) => {
//     console.log('rejected',err);
// });


