import { DomainError } from '../../domain.error'
import { format } from 'util'

export class EntityError extends DomainError {
  static MESSAGE = 'Entity error: "%s"'

  constructor (message: string) {
    super(format(EntityError.MESSAGE, message))
  }
}
