import {Request, Response, NextFunction} from 'express'

import { db } from '../common/db-factory'
import { IModel } from '../model/generic-model'

export abstract class GenericController<E extends IModel> {

    tableName: string
    selectableProps: string[]

    constructor(protected model: E){
        this.tableName = model.tableName
        this.selectableProps = model.props
    }

    findAll = (req: Request, res: Response, next: NextFunction) => {
        db.select(this.selectableProps).from(this.tableName)
          .then(results => {
              res.send(results)
              next()
          })
          .catch(next)
    }

    findById = (req: Request, res: Response, next: NextFunction) => {
        db.select(this.selectableProps).from(this.tableName).where({id: req.params.id})
          .then(results => {
              res.send(results)
              next()
          })
          .catch(next)
    }

    save = (req: Request, res: Response, next: NextFunction) => {
       db.insert(req.body)
         .into('products')
         .then(result => {
             res.send(result)
             next()
         })
         .catch(next)
    }

    update = (req: Request, res: Response, next: NextFunction) => {
        let modelId = req.params.id
        let updateProps = req.body
        console.log(updateProps)
        db.update(modelId, updateProps)
          .then(() => {
                res.send({
                message: 'Successfully updated'})
                next()
           })
          .catch(next)
    }

    delete = (req: Request, res: Response, next: NextFunction) => {
        db.del()
          .from(this.tableName)        
          .where({ id: req.params.id })
          .then(() => {
                res.send( {message: 'Successfully deleted'})
                next()
                })
          .catch(next)
                        
    }

}