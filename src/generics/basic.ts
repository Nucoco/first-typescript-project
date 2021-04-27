export default function genericsBasicSample() {
  //Without generic type
  const stringReduce = (array: string[], initialValue: string): string => {
    const result = array.reduce((acc, cur) => (acc += cur), initialValue)
    return result
  }
  console.log(stringReduce([' with', ' you.'], 'Be'))

  const numberReduce = (array: number[], initialValue: number): number => {
    const result = array.reduce((acc, cur) => {
      return (acc += cur)
    }, initialValue)
    return result
  }
  console.log(numberReduce([10, 100], 1))

  //With generic type
  type Reduce<T> = {
    (array: T[], initialValue: T): T
  }
  const strReduce: Reduce<string> = (array, initialValue) => {
    return array.reduce((acc, cur) => (acc += cur), initialValue)
  }
  console.log(strReduce(['BC', '...Z'], 'A'))

  //Variety of generic notation
  type Gen = {
    <T>(array: T[], initialValue: T): T
    <U>(array: U[], initialValue: U): U
  }
  type Gen1<T> = (array: T[], initialValue: T) => T
  type Gen2 = <T>(array: T[], initialValue: T) => T
}
