import * as express from "express";

import { restaurantController } from '../controller/restaurants-controller'

class RestaurantRouter {

    
    public applyRoutes(app: express.Application) : void {
    
        app.get('/restaurant',        restaurantController.findAll)
        app.post('/restaurant',       restaurantController.save) 
        app.get('/restaurant/:id',    restaurantController.findById)
        app.put('/restaurant/:id',    restaurantController.update)  
        app.delete('/restaurant/:id', restaurantController.delete) 
     }
}

export const restaurantRauter = new RestaurantRouter()