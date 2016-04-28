import something from './addition'
import {users} from './data/users'
import _ from 'lodash'


console.log(_.find(users, {age:36}))

console.log("2+3", something.sumTwo(2,3))

console.log("2+3+4", something.sumThree(2,3,4))
