
// JavaScript source code
let mongoose = require('mongoose');
const moviesSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

var Movie =module.exports = mongoose.model('Movie', moviesSchema);

module.exports.get = function (callback, limit) {
    Movie.find(callback).limit(limit);
}