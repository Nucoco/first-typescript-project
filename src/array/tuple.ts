export default function tupleSample() {
  const res: [number, string] = [200, 'OK']
  console.log('tuple: ', typeof res, res)

  //Destructuring assignment syntax (in JS)
  // const x: number[] = [1,10,100,1000]
  // const [y, z, ...rest]: number[] = x
  // console.log(x, y, z, rest)

  //Tuple with rest parameter
  const num: [number, ...number[]] = [1, 10, 100]
  num.push(1000)
  console.log(num)
}
