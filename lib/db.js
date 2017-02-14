module.exports = function(knex) {
  return {

    getAll: function(table, callback) {
      knex(table)
      .then(function (resp) {
        callback(null, resp)
      })
    },
    findOne: function(table,params,callback) {
      knex(table)
        .where(params)
          .then (function (resp) {
            callback (null,resp[0])
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