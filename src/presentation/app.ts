import 'reflect-metadata'
import routes from './routes'
import expresso from '@expresso/app'
import { container } from 'tsyringe'
import errors from '@expresso/errors'
import sendgrid from '../lib/sendgrid'
import { Services } from '../services'
import { IAppConfig } from '../app-config'
import { IExpressoAppFactory } from '@expresso/server'
import { Express, Request, Response, NextFunction } from 'express'
export const app: IExpressoAppFactory<IAppConfig> = expresso(
  async (app: Express, config: IAppConfig, environment: string) => {
    // Use this
    // container.register('Someconfig', { useValue: { fromAddress: config.someConfig } })

    // Do NOT remove unless you have no service
    const services = container.resolve(Services)

    // Here's how you can create a route
    // app.post('/route', routes.foo.bar(services.service1))

    // Do NOT remove anything after this line
    app.use((err: any, _req: Request, _res: Response, next: NextFunction) => {
      if (err.response && err.response.body) {
        console.log(JSON.stringify(err.response.body, null, 4))
      }

      next(err)
    })

    app.use(errors(environment))
  }
)
