export default function arraySample() {
  const odd: number[] = [1, 5, 9]
  const even: Array<number> = [2, 4, 6]
  const union: (string | number)[] = ['a', 1, 'AB', 10]
  console.log('odd: ', typeof odd, odd, '\neven: ', typeof even, even, '\nunion: ', union)

  //Immutable array
  const immNum: readonly number[] = [1, 2]
  const immStr: ReadonlyArray<string> = ['a', 'b', 'AB']
  const immBol: Readonly<boolean[]> = [true, false, false]
  console.log(immNum, immStr, immBol)
}
