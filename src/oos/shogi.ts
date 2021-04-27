type Suji = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
type Dan = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
type Player = 'first' | 'second'

class Position {
  constructor(private suji: Suji, private dan: Dan) {}

  distanceFrom(position: Position, player: Player) {
    if (player === 'first') {
      return {
        suji: position.suji - this.suji, // (> 0) => left
        dan: Number(position.dan) - Number(this.dan), // (> 0) => front
      }
    } else {
      return {
        suji: this.suji - position.suji, // (0 >) => left
        dan: Number(this.dan) - Number(position.dan), // (> 0) => front
      }
    }
  }
}

abstract class Piece {
  protected position: Position

  constructor(private readonly player: Player, suji: Suji, dan: Dan) {
    this.position = new Position(suji, dan)
  }

  moveTo(position: Position) {
    this.position = position
  }

  abstract canMoveTo(position: Position, player: Player): boolean
}

class Osho extends Piece {
  canMoveTo(position: Position, player: Player): boolean {
    const distance = this.position.distanceFrom(position, player)
    return distance.suji < 2 && distance.dan < 2
  }
}

class Game {
  private pieces = Game.makePieces()
  private static makePieces() {
    return [new Osho('first', 5, '1'), new Osho('second', 5, '9')]
  }
}
