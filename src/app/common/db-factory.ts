import * as knex from 'knex'

export const db = knex({
    client:'mysql',

    connection: {
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'test'
    }
})
