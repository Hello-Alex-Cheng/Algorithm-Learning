
const jsonParse = str => {
  console.log(eval("(" + str + ")"))
}

jsonParse('{"a":1}')
