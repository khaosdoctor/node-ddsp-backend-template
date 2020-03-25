import { injectable } from 'tsyringe'

@injectable()
export class Entity {
  readonly property: string

  constructor (params: IEntity) {
    this.param1 = params.param1
  }

  // Other Methods here

  toObject (): Entity {
    return {
      // Your entity as object here
    }
  }
}
