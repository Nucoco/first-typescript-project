export default function typeAliasSample() {
  //type alias
  type County = {
    capital: string
    name: string
  }

  const japan: County = {
    capital: 'Tokyo',
    name: 'Japan',
  }

  console.log(japan)

  //union, intersection
  type Knight = {
    hp: number
    sp: number
  }
  type Wizard = {
    hp: number
    mp: number
  }

  type Adventure = Knight | Wizard
  type Paladin = Knight & Wizard

  const adventure1: Adventure = {
    hp: 100,
    sp: 10,
  }
  const adventure2: Adventure = {
    hp: 10,
    mp: 100,
  }
  const adventure: Adventure = {
    hp: 50,
    sp: 20,
    mp: 20,
  }
  const paladin: Paladin = {
    hp: 500,
    sp: 200,
    mp: 200,
  }

  console.log(adventure1, adventure2, adventure, paladin)

  //union for primitive
  type Primitive = boolean | number | string

  const primitive: Primitive = true

  console.log(typeof primitive, primitive)
}
