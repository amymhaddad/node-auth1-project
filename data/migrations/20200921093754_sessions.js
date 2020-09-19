
exports.up = function(knex) {
    return knex.schema.createTable("sessions", function(table) {
        table.increments("id")
        table
            .integer("user_id")
            .notNullable()
            .references("id")
            .inTable("users")
            .onUpdate("CASCADE")
            .onDelete("CASCADE")
        })

};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("sessions")
};
