export default function genericsAdvancedSample() {
  //Signature of Map method
  type Map<T, U> = (array: T[], fn: (item: T) => U) => U[]

  const mapStringsToNumbers: Map<string, number> = (array, fn) => {
    // const nums: number[] = array.map((str) => fn(str))
    const nums: number[] = []
    for (let i = 0; i < array.length; i++) {
      nums[i] = fn(array[i])
    }
    return nums
  }
  const numbers = mapStringsToNumbers(['12', '45', '78'], (item) => Number(item))
  console.log(numbers)

  const mapNumbersToStrings: Map<number, string> = (array, fn) => {
    const strs: string[] = array.map((num) => fn(num))
    return strs
  }
  const strings = mapNumbersToStrings(numbers, (item) => String(item))
  console.log(strings)
}
