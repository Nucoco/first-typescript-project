//Named parameter, Default parameter,
export const paraFunc = (arg1 = 'ARG1', arg2?: string): void => {
  console.log('paraFunc:', '\narg1: ', typeof arg1, arg1, '\narg2: ', typeof arg2, arg2)
}

//Rest parameter
export const sumPrice = (...prices: number[]): number => {
  return prices.reduce((prevTotal: number, price: number): number => {
    return prevTotal + price
  }, 0)
}

//Called signature
type func1 = (arg: string) => void
type func2 = {
  (arg: number): void
}
export const fn1: func1 = (argument) => {
  console.log('fn1: func1', '\n', typeof fn1, '\n', fn1, '\n', argument)
}
export const fn2: func2 = (argument) => {
  console.log('fn2: func2', '\n', typeof fn2, '\n', fn2, '\n', argument)
  console.log(exports)
}
