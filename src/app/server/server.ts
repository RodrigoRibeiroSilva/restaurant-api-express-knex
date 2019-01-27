import * as express from "express";
import * as bodyParser from "body-parser";

import { environment } from '../common/environment'
import { restaurantRauter } from '../router/restaurants-rauter'


export class Server {
    
    public app: express.Application
    private port : any

    constructor() {
        this.app = express();
        this.port = environment.server.port
        this.config();
        
        restaurantRauter.applyRoutes(this.app)
        
    }

    initServer(){
        return this.app.listen(this.port, () =>{
            console.log('Server is listening on PORT:', this.port)
        })
    }

    private config(): void {
        // support application/json
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}