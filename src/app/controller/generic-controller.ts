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

    isValidObject(reqProps: string[]) : boolean{
        let isValid = false
        if(reqProps.length === this.selectableProps.length - 1){
            return true
        }
        return isValid
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

        let isValid = this.isValidObject(Object.keys(req.body))

        if(isValid){
            db(this.tableName)
            .returning(this.selectableProps)
            .insert(req.body)
            .then(result => {
                res.send( {message: `Added successfully - Id: ${result}`})
                next()
            })
            .catch(next)
        }else{
            next(new Error('Invalid Document'))
        }
        
    }

    update = (req: Request, res: Response, next: NextFunction) => {

        db(this.tableName).where({id: req.params.id}).update(req.body)
          .then(results => {
              if(results){
                res.send({
                    message: 'Updated Successfully'})
                    next()
              }else{
                throw new Error('Document not found')
              }
               return next()
           })
          .catch(next)
    }

    delete = (req: Request, res: Response, next: NextFunction) => {
        db.del()
          .from(this.tableName)        
          .where({ id: req.params.id })
          .then(result => {
                if(result){
                    res.send( {message: 'Deleted successfully'})
                    
                }else{
                    throw new Error('Document not found')
                }
                return next()
            })
                
          .catch(next)                
    }

}