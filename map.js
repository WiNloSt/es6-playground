let myMap = new WeakMap()

var myObj = {}
var myFunc = () => {}

myMap.set(myObj, 'bar')
myMap.set(myFunc, 'world')
// myMap.set('yo', 2)

// console.log(myMap.has('yo'))


for (let key of myMap.entries()) {
  console.log(key)
}
