//Merge of declaration
interface Country {
  name: string
}
interface Country {
  capital: string
}
const japan: Country = {
  name: 'JAPAN',
  capital: 'Tokyo',
}
//type Ver
type Mabodofu = {
  calories: number
  spiciness: number
}
type Rice = {
  calories: number
  gram: number
}
type Mabodon = Mabodofu & Rice //intersection type
const mabodon: Mabodon = {
  calories: 400,
  spiciness: 2,
  gram: 500,
}

//Inheritance with Extends
interface Book {
  page: number
  title: string
}
interface Magazine extends Book {
  cycle: 'daily' | 'weekly' | 'monthly'
}
const jump: Magazine = {
  page: 200,
  title: 'JUMP',
  cycle: 'weekly',
}

type BookType = {
  page: number
  title: string
}
interface Handbook extends BookType {
  theme: string
}
const cotrip: Handbook = {
  page: 120,
  title: 'CoTrip',
  theme: 'travel',
}

//Type definition of class with Implements
class Comic implements Book {
  page: number
  title: string

  constructor(page: number, title: string, private publishYear: string) {
    this.page = page
    this.title = title
    this.publishYear = publishYear
  }

  getPublishYear() {
    return this.title + ' was published in ' + this.publishYear
  }
}

export const popularComic = new Comic(200, 'Jujutsu', '2018')
