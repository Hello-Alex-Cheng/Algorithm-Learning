/*
 * @Author: chenghaolun
 * @Date: 2021-07-28 10:09:47
 * @LastEditors: chenghaolun
 * @Description: 测试文件
 * @LastEditTime: 2021-08-30 12:59:16
 * @FilePath: \Algorithm-Learning\InterviewIssues\index.js
 */

// 利用 Porxy, 实现数组的 负索引
// 比如 arr[-1] 表示 arr[arr.length - 1]

// const proxyArr = arr => {
//   const len = arr.length
//   return new Proxy(arr, {
//     get(target, key) {
//       if (key < 0) {
//         const index = len + (+key)
//         return Reflect.get(target, index)
//       } else {
//         return Reflect.get(target, key)
//       }
//     }
//   })
// }

// const arr = proxyArr([5, 6, 7, 8, 9])
// console.log(arr[-2])
// console.log(arr[-1])
// console.log(arr[0])


// let curr = head
// let prevNode = null
// while(curr) {
//   const next = curr.next
//   curr.next = prevNode
//   prevNode = curr
//   curr = next
// }


// function towSum(arrs, target) {
//   // for (let i = 0; i < arrs.length; i++) {
//   //   for (let j = i + 1; i < arrs.length; j++) {
//   //     if (arrs[i] + arrs[j] === target) {
//   //       return [i, j]
//   //     }
//   //   }
//   // }

//   const map = new Map()
//   // key: value => value: index
//   map.set(arrs[0], 0)
//   for (let i = 1; i < arrs.length; i++) {
//     const res = target - arrs[i]
//     if (map.get(res) !== undefined) {
//       return [map.get(res), i]
//     } else {
//       map.set(arrs[i], i)
//     }
//   }
// }

// console.log(towSum([2,11,7,10], 21))


// var str = "您好，<%=name%>。欢迎来到<%=location%>";
// function template(str) {
//   // your code
//   str = str.replace(/\<%=|\%>/g, '')
//   // str = str.replace(/\%>/g, '')

//   return function(data) {
//     if (!data) return data
//     // 记住这里要重新赋值，然后修改 res 中的 key
//     // 因为 string 属于基本数据类型，你修改了一次之后，再去拿 str，它还是修改之前的值
//     let res = str
//     for (let key in data) {
//       if (res.includes(key)) {
//         res = res.replace(key, data[key])
//       }
//     }

//     console.log(res)
//   }
// }
// var compiled = template(str)
// // compiled的输出值为：“您好，张三。欢迎来到网易游戏”
// compiled({ name: "张三", location: "网易游戏" });


// function template1(str) {
//     return data => str.replace(/<%=(\w+)%>/g, (match, p) => data[p] || '')
// }


// Person("Li");
// 输出： Hi! This is Li!

// Person("Dan").sleep(10).eat("dinner");
// 输出：
// Hi! This is Dan!
// 等待10秒..
// Wake up after 10
// Eat dinner~

// Person("Jerry").eat("dinner").eat("supper");
// 输出：
// Hi This is Jerry!
// Eat dinner~
// Eat supper~

// Person("Smith").sleepFirst(5).eat("supper");
// 输出：
// 等待5秒
// Wake up after 5
// Hi This is Smith!
// Eat supper
class PersonGenerator {
  taskQueue = [];
  constructor(name) {
    this.taskQueue.push(() => this.sayHi(name));
    this.runTaskQueue();
  }
  nextTask = () => {
    if (this.taskQueue.length > 0) {
      const task = this.taskQueue.shift();
      if (typeof task === "function") {
        task();
        this.nextTask();
      }
      if (typeof task === "number") {
        console.log(`Sleep ${task} seconds \n`);
        setTimeout(() => this.nextTask(), task * 1000);
      }
    }
  };

  runTaskQueue = () => {
    setTimeout(() => this.nextTask());
  };

  sayHi(name) {
    console.log(`Hi! This is ${name}! \n`);
    return this;
  }

  sleep(seconds) {
    this.taskQueue.push(seconds);
    return this;
  }

  sleepFirst(seconds) {
    this.taskQueue.splice(-1, 0, seconds);
    return this;
  }

  eat(food) {
    this.taskQueue.push(() => console.log(`Eat ${food}~ \n`));
    return this;
  }
}

const Person = name => new PersonGenerator(name);

// Person("helloWorld").sleep(3).eat('foot').sleepFirst(2).eat("little_cute");


// try {
//   while (1) {
//     switch ("yideng") {
//       case "yideng":
//         throw new Error('break')
//       //禁止直接写一句break
//     }
//   }
// } catch (error) {
//   console.log(error)
// }
// loop1:
// while (1) {
//   switch ("yideng") {
//     case "yideng":
//       break loop1
//     //禁止直接写一句break
//   }
// }


// loop:
// while (1) {
//   console.log(Math.random());
//   break loop
// }

// try {
//   while (1) {
//     console.log(Math.random());
//     throw new Error('break')
//   }
// } catch (error) {
//   console.log(error)
// }


function addMethod(object, name, fnt) {
  var old = object[name];  // 保存前一个值，以便后续调用
  object[name] = function(){  // 向object[name]赋值一个代理函数
    // 判断fnt期望接收的参数与传入参数个数是否一致
    if (fnt.length === arguments.length)
      // 若是，则调用fnt
      return fnt.apply(this, arguments)
    else if (typeof old === 'function')  // 若否，则判断old的值是否为函数
      // 若是，则调用old
      return old.apply(this, arguments);
  };
}
//模拟重载add
var methods = {};
//添加方法，顺序无关
addMethod(methods, 'add', function(){return 0});
addMethod(methods, 'add', function(a,b){return a + b});
addMethod(methods, 'add', function(a,b,c){return a + b + c});
//执行
console.log(methods.add()); //0
console.log(methods.add(10,20)); //30
console.log(methods.add(10,20,30)); //60


var arr = [1,2,3,4,5]

function disorder(arr) {
    return Array.from(arr).sort(()=>Math.random()-0.5)
}
var arr2 = disorder(arr)
console.log(arr2)
console.log(arr)
console.log(arr === arr2)

let arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
function shuffle(arr) {
    let i = arr.length;
    while (i) {
        let j = Math.floor(Math.random() * i--);
        [arr[j], arr[i]] = [arr[i], arr[j]];
    }
    return arr;
}
shuffle(arr);



function newOperator(ctor) {
  var obj = {}
  var args = Array.prototype.slice.call(arguments, 1)
  obj.__proto__ = ctor.prototype

  ctor.apply(obj, args)

  return obj
}

function A() {}

function B() {
  A.call(this)
}

B.prototype = new A()


const promiseAjax = function(data){
  function formatParams(param) {
      var arr = [];
      for (var name in param) {
          arr.push(encodeURIComponent(name) + "=" + encodeURIComponent(param[name]));
      }
      arr.push(("v=" + Math.random()).replace(".", ""));
      return arr.join("&");
  }
  if (!data) data = {}
  data.params= data.params || {}

  return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      if (data.type === 'get') {
          data.params = formatParams(data.params); //options.data请求的数据

          xhr.open("GET", data.url + "?" + data.params, true);
          xhr.send(null);
      } else if (options.type == "post") {
          xhr.open("POST", data.url, true);
          xhr.setRequestHeader("Content-type", "application/json");
          xhr.send(data.params);
      }

      xhr.onreadystatechange = function () {
          if (xhr.readyState == 4) {
              if (xhr.status === 200) {
                  resolve(xhr.response)
              } else {
                  reject(xhr.responseText);
              }
          }
      }
  })
}