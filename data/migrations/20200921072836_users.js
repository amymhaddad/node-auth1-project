
exports.up = function(knex) {
    return knex.schema
    .createTable("users", function(table) {
        //PK
        table.increments("id")

        //Fields
        table.string("first_name", 100).notNullable();
        table.string("last_name", 100).notNullable();
        table.integer("age").notNullable();
        table.string("password").notNullable();
        table.string("username").notNullable().unique();
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("users")  
};
