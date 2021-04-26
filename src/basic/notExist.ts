export default function notExistSample() {
  const name = null
  console.log('null sample: ', typeof name, name)

  if (!name) {
    console.log('!name == true ', name)
  } else {
    console.log('!name == false', name)
  }

  const age = undefined
  console.log('undefined sample: ', typeof age, age)

  if (!age) {
    console.log('!age == true ', age)
  } else {
    console.log('!age == false', age)
  }
}
