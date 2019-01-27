exports.seed = function(knex, Promise) {
  let tableName = 'Reviews'

  var rows = [

    // You are free to add as many rows as you feel like in this array. Make sure that they're an object containing the following fields:
    {
        comments: "Repas plutôt bon, bon accueil mais il faudrait revoir le prix. Celui ci est trop élevé pour ce qu' on y mange ou sinon augmenté les portions. Par ailleurs ils ont oublié de nous donner le fromage blanc qui était dansé menu. Pandey",
        rating: 2,
        created_at: new Date,
        restaurantId: 1,
        userId: 1
    },

  ];

  return knex( tableName )
    // Empty the table (DELETE)
    .del()
    .then( function() {
        return knex.insert( rows ).into( tableName );
    });
};
