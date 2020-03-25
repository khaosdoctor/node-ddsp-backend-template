import { injectable, inject } from 'tsyringe'
import { Entity } from '../../domain/domain/entity'

@injectable()
export class SomeClient {
  private readonly someClient: typeof SomeService

  constructor (@inject('SomeConfig') someService: typeof SomeService) {
    this.someClient = someService
  }

  // Other methods here
}
