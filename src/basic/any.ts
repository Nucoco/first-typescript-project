export default function anySample() {
  console.log(__filename)

  const name: any = 'torahack'
  console.log('any sample: ', typeof name, name)
}
