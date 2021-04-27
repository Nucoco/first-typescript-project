export default function callbackSample() {
  const url = 'https://api.github.com/users/Nucoco'

  //Asynchronous processing with Callback
  const fetchProfile = () => {
    return fetch(url) //Asynchronous process
      .then((res) => {
        //As asynchronous process finished, get the data as res
        res
          .json() //Asynchronous process again
          .then((json) => {
            //As asynchronous process finished, get the data as json
            console.log('Asynchronous Callback Sample 1: ', json)
            return json
          })
          .catch((error) => {
            console.error(error)
          })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const profile = fetchProfile()

  console.log('Asynchronous Callback Sample 2: ', profile)
}
