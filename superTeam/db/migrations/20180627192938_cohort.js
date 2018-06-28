
exports.up = function(knex, Promise) {
    
    return knex.schema.createTable('cohort', table => {
        table.increments('id');
        table.text('imgUrl');
        table.string('name');
        table.text('members');
        table.timestamp('createdAt').default(knex.fn.now());
    });
    


};

exports.down = function(knex, Promise) {

    return knex.schema.dropTable('cohort');
};


