
const promise = new Promise((resolve, reject) => {

  console.log('new Promsie()');

  setTimeout(() => {
    // resolve('successful')
    reject('error')
  }, 1500);
})

promise.then(res => {
  console.log('first then: ', res)

  return `${res} ---- to next then`
}).catch(err => {
  console.log('err ', err)
  return `${err} ---- err to next then`
}).then(res => {
  /**
   * @name .catch 后面是可以接 then 方法的，并且参数就是 catch 的返回值
   */
  console.log('resss ', res)

  return '??'
}).finally(() => {
  console.log('finally')

  return 'finally'
}).then(res => {
  // 这里的 res 是 finally 之前那个 then 的返回值
  console.log('finally then', res)
})