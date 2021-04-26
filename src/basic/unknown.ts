export default function unknownSample() {
  const maybeNumber: unknown = 10
  console.log('unknown maybeNumber sample: ', typeof maybeNumber, maybeNumber)

  const isTen: boolean = maybeNumber === 10
  console.log('unknown isTen sample: ', typeof isTen, isTen)

  // const sum: number = maybeNumber + 5 //this code outputs an error

  if (typeof maybeNumber === 'number') {
    const sum: number = maybeNumber + 5
    console.log('unknown sum sample: ', typeof sum, sum)
  }
}
