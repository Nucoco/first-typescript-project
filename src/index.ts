// import World from './world'

// const root = document.getElementById('root')
// const world = new World('Hello world!')
// world.sayHello(root)

//#3
// import { anySample, notExistSample, primitiveSample, unknownSample } from './basic'
// anySample()
// notExistSample()
// primitiveSample()
// unknownSample()

//#4
// import {logMessage, logMessage2, logMessage3, alwaysThrowError} from './function/basic'
// import {paraFunc, sumPrice, fn1, fn2} from './function/parameters'

// logMessage('Hello World')
// logMessage2('Hello TypeScript')
// logMessage3('Hello function type definition')
// alwaysThrowError('Hi, Error')
// paraFunc()
// paraFunc('aaa')
// paraFunc('bbb', 'ccc')
// console.log('sum1:', sumPrice(1))
// console.log('sum2:', sumPrice(1, 2))
// fn1('call fn1')
// fn2(987654)

//#5
// import objectSample from './object/object'
// import typeAliasSample from './object/alias'
// objectSample();
// typeAliasSample();

//#6
// import arraySample from './array/array'
// import tupleSample from './array/tuple'
// arraySample()
// tupleSample()

//#7
// import genericsAdvancedSample from './generics/advanced'
// import genericsBasicSample from './generics/basic'
// genericsBasicSample()
// genericsAdvancedSample()

import { popularComic } from './interface/interface'
console.log(popularComic.getPublishYear())
