exports.up = function(knex, Promise) {
    return createUsersTable().then(() => createRestaurantsTable()).then(() => createReviewsTable())

    function createUsersTable() {
        return knex.schema.createTable('Users', function (table) {
          table.increments('id').primary().unsigned();
          table.string('name',50);
          table.string('username', 50);
          table.string('email',50);
          table.string('password');
        });
      };

      function createRestaurantsTable() {
         return knex.schema.createTable('Restaurants', function (table) {
          table.increments('id').primary().unsigned();
          table.string( 'name', 250 ).notNullable();
          table.string( 'address', 250 ).notNullable();
        });
      };

      function createReviewsTable() {
        return knex.schema.createTable('Reviews', function (table) {
          table.increments('id').primary().unsigned();
          table.string( 'comments' ).notNullable();
          table.decimal( 'rating' ).notNullable();
          table.timestamp( 'created_at' ).notNullable();
          table.integer('restaurantId').unsigned();
          table.integer('userId').unsigned();
    
          /* CREATE FKS */
          table.foreign('restaurantId').references('id').inTable('Restaurants');
          table.foreign('userId').references('id').inTable('Users')
        });
      };
};

exports.down = function(knex, Promise) {

    // We use `...ifExists` because we're not sure if the table's there. Honestly, this is just a safety measure. 
    return knex.schema
            .dropTableIfExists( 'users' )
            .dropTableIfExists( 'restaurants' )
            .dropTableIfExists( 'reviews' );

};