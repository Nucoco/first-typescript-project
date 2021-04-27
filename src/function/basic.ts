//Arrow function
export const logMessage = (message: string): void => {
  console.log('Function basic.ts logMessage: ', message)
}
//Named function
export function logMessage2(message: string): void {
  console.log('Function basic.ts logMessage2: ', message)
}
//Function expression
export const logMessage3 = function (message: string): void {
  console.log('Function basic.ts logMessage3: ', message)
}

//Never
export const alwaysThrowError = (message: string): never => {
  throw new Error(message)
}
