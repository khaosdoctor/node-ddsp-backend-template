import rescue from 'express-rescue'
import { boom } from '@expresso/errors'
import { validate } from '@expresso/validator'
import { Request, Response, NextFunction } from 'express'

export default function (service: Service1) {
  return [
    validate({
      type: 'object',
      properties: {
        from: { oneOf: [{ type: 'string', format: 'email' }, { type: 'object', properties: { name: { type: 'string' }, email: { type: 'string', format: 'email' } } }] },
        to: {
          type: 'array',
          items: {
            anyOf: [{ type: 'string', format: 'email' }, { type: 'object', properties: { name: { type: 'string' }, email: { type: 'string', format: 'email' } } }]
          }
        },
        subject: {
          type: 'string'
        },
        required: ['to', 'subject', 'template'],
        additionalProperties: false
      }),
    rescue(async (req: Request, res: Response) => {
      // const data = req.body
      // const entity = await service.someMethod(data)

      // res.status(202)
      //   .json(entity.toObject())
    }),
    (err: any, _req: Request, _res: Response, next: NextFunction) => {
      // if (err instanceof SomeError) return next(boom.badImplementation(err.message, { code: 'some_code' }))
      next(err)
    }
  ]
}
