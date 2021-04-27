export default function objectSample() {
  //object literal way
  const country: {
    language: string
    name: string
    population?: number
    readonly isIsland: boolean
  } = {
    language: 'Japanese',
    name: 'Japan',
    isIsland: true,
  }
  console.log('Object country:', '\ntype:', typeof country, '\n', country, '\n', country.language, country.name)

  //index signature
  const capitals: {
    [countryName: string]: string
  } = {
    Japan: 'Tokyo',
    Korea: 'Seoul',
  }
  capitals.China = 'Beijing'
  console.log(capitals)
}
