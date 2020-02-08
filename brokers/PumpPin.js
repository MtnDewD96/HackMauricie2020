const Mongoose= require('mongoose');

let Model = (() => {
    let model = Mongoose.model(
        'pumpPin',
        new Mongoose.Schema({}, {strict: false}),
        'pumpPin'
    );

    return {
        findAll: (callback) => {
            model.find({}, callback);
        },
        findById: (id, callback) => {
            model.find({_id: id}, callback);
        },
        insert: (data, callback) => {
            model.create(data, callback);
        }
    };
})();

module.exports = Model;

