
exports.seed = function(knex) {
    const tableName = "users"

    const rows = [
        {first_name: "Jim", last_name: "Dandy", age: 12, password: "aaa", username: "jdandy1"},
        {first_name: "Nancy", last_name: "McFadden", age: 32, password: "bbb", username: "nmcfadden1"},
        {first_name: "Chevy", last_name: "Chase", age: 54, password: "ccc", username: "cchase1"},
        {first_name: "Henry", last_name: "Hanns", age: 62, password: "ddd", username: "hhanns1"},
        {first_name: "Frank", last_name: "McGrub", age: 62, password: "eee", username: "fmcgrub1"},
        {first_name: "Lance", last_name: "Kenns", age: 12, password: "fff", username: "lkenns1"}
    ];
   
  return knex(tableName)
    .del()
    .then(function () {
      return knex(tableName).insert(rows).into(tableName);
    });
};
