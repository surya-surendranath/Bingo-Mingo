module.exports = function(knex) {
  return {

    getAll: function(table, callback) {
      knex(table)
      .then(function (resp) {
        callback(null, resp)
      })
    },
     getFirstEight: function(table, callback) {
      knex(table)
      .limit(8)
      .then(function (resp) {
        callback(null, resp)
      })
    }
}
}