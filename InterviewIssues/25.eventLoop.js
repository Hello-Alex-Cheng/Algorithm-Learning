// setTimeout(function(){
//   console.log('定时器开始啦')
// });

// new Promise(function(resolve){
//   console.log('马上执行for循环啦');
//   for(var i = 0; i < 10000; i++){
//       i == 99 && resolve();
//   }
// }).then(function(){
//   console.log('执行then1函数啦')
// }).then(function(){
//   console.log('执行then2函数啦')
// })

// console.log('代码执行结束');




/**
 * @name 更复杂一点
 */
console.log('1');
setTimeout(function() {
    console.log('2');
    process.nextTick(function() {
        console.log('3'); // 3
    })
    new Promise(function(resolve) {
        console.log('4');
        resolve();
    }).then(function() {
        console.log('5') // 4
    })
})
process.nextTick(function() {
    console.log('6'); // 1
})
new Promise(function(resolve) {
    console.log('7');
    resolve();
}).then(function() {
    console.log('8') // 2
})

setTimeout(function() {
    console.log('9');
    process.nextTick(function() {
        console.log('10'); // 5
    })
    new Promise(function(resolve) {
        console.log('11');
        resolve();
    }).then(function() {
        console.log('12') // 6
    })
})


/**
 * @name 多个setTimeout情况
 */

// console.log(1)

// setTimeout(() => {
//   console.log(2)

//   // timeout 执行完之后，直接执行 Promsie，以及 .then

//   // 等这里面的所有微任务都执行完毕之后，再执行下一个 setTimeout
//   new Promise((r) => {
//     console.log(3)
//     r()
//   }).then(() => {
//     console.log(4)
//   })
//   .then(() => {
//     console.log(5)
//   })
// });

// new Promise(r => {
//   console.log(6)
//   r()
// }).then(() => {
//   console.log(7)
// })

// setTimeout(() => {
//   console.log(8)

//   new Promise((r) => {
//     console.log(9)
//     r()
//   }).then(() => {
//     console.log(10)
//   })
//   .then(() => {
//     console.log(11)
//   })
// })
