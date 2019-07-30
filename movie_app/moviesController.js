// JavaScript source code
let Movie = require('./movieModel')

exports.create = function (req, res) {
    console.log('came in save method');
    let movie = new Movie();
    movie.name = req.body.name;
    movie.save(function (err){
        res.json({
            status: 'SUCCESS',
            message: 'save movie successfully'
        })
    })
};

//assignment questions

//find by id
exports.view = function (req, res) {
    //let movie = new Movie();
    Movie.findById(req.params.id, function (err, movie) {
        if (err)
            res.send(err);
        res.json({
            message: 'Contact details loading..',
            data: movie
        });
    });
};

//display
exports.index = function (req, res) {
    Movie.get(function (err, movie) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Moovies retrieved successfully",
            data: movie
        });
    });
};


//delete
exports.delete = function (req, res) {
    console.log("in delete function");
    Movie.remove({
        _id: req.params.id
    }, function (err, movie) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Contact deleted'
        });
    });
};


//update 
// Handle update contact info
exports.update = function (req, res) {
    Movie.findById(req.params.id, function (err, movie) {
        if (err)
            res.send(err);
        movie.name = req.body.name ? req.body.name : movie.name;
        // save the contact and check for errors
        movie.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Contact Info updated',
                data: movie
            });
        });
    });
};








exports.listAll = function (req, res) {
    res.json([
        {
            id: 1,
            name: 'abc'
        },
        {
            id: 2,
            name: 'xyz'
        }

    ]);
};

exports.findById = function (req, req) {
    console.log(req.params.id);
    res.json({
        id: 1,
        name: 'abcd'
    });

};