export default function promiseSample() {
  const url = 'https://api.github.com/users/Nucoco'

  type Profile = {
    login: string
    id: number
  }

  type FetchProfile = () => Promise<Profile | null>

  //Asynchronous processing with Promise
  const fetchProfile: FetchProfile = () => {
    return new Promise((resolve, reject) => {
      return fetch(url) //Asynchronous process
        .then((res) => {
          //As asynchronous process finished, get the data as res
          res
            .json() //Asynchronous process again
            .then((json: Profile) => {
              //As asynchronous process finished, get the data as json
              console.log('Asynchronous Promise Sample 1: ', json)
              resolve(json)
            })
            .catch((error) => {
              console.error(error)
              reject(null)
            })
        })
        .catch((error) => {
          console.error(error)
          reject(null)
        })
    })
  }

  fetchProfile()
    .then((profile: Profile | null) => {
      if (profile) {
        console.log('Asynchronous Promise Sample 2: ', profile)
      }
    })
    .catch((err) => {
      console.error(err)
    })
}
