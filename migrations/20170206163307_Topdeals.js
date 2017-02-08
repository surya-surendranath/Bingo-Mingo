exports.up = function(knex, Promise) {

  console.log('create table')

  return knex.schema.createTableIfNotExists('Topdeals', function(table) {
      table.increments('id')
      table.string('Vendor')
      table.string('Title')
      table.string('Deal_price')
      table.string('Old_price')
      table.string('Category')
      table.string('Image1')
      table.string('Image2')
      table.string('Image3')
      table.string('Image4')  
      table.string('Rating')
      table.string('people_bought')
      table.string('People_Reviewed')
      table.string('Valid')
      table.timestamps()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('Topdeals').then(function () {
    console.log('Topdeals table were dropped')
  })
};

