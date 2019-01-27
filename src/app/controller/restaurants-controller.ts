import {Request, Response, NextFunction} from 'express'

import { GenericController } from '../controller/generic-controller'
import { RestaurantModel } from '../model/restaurants-model'


class RestaurantController extends GenericController<RestaurantModel> {

    constructor(){
        super(new RestaurantModel())
    }

}

export const restaurantController = new RestaurantController()