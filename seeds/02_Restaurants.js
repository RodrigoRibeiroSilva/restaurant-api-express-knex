
exports.seed = function(knex, Promise) {
  let tableName = 'Restaurants'

  var rows = [

    // You are free to add as many rows as you feel like in this array. Make sure that they're an object containing the following fields:
    {
      name: 'Le Point Zéro',
      address: "Restaurant au 9 rue Paul Lelong, 75002 Paris",
    },

    {
      name: 'Le Myrha',
      address: 'Restaurant au 70 Rue Myrha, 75018 Paris',
    },

    {
      name: 'La Table du Palais Royal',
      address: 'Restaurant au 8 Rue de Beaujolais, 75001 Paris-1ER-Arrondissement',
    },

    {
      name: 'Le Vaudeville',
      address: 'Restaurant au 29 Rue Vivienne, 75002 Paris',
    }
  ];

  return knex( tableName )
    // Empty the table (DELETE)
    .del()
    .then( function() {
        return knex.insert( rows ).into( tableName );
    });
};
