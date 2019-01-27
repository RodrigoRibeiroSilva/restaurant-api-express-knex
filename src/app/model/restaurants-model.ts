import { IModel } from './generic-model'

export class RestaurantModel implements IModel {
    tableName: string
    props: string[]
    
    constructor(){
      this.tableName = 'restaurants'
      this.props = ['id','name','address']
    }
}
