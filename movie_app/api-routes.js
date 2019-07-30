// JavaScript source code
let router = require('express').Router();

let MoviesController = require('./moviesController')

router.get('/', (req, res) => {
    res.json({
        status: 'API is working',
        message: 'MoviesApp rest API'
    })
});

router.route('/movies')
    .get(MoviesController.listAll)
    .post(MoviesController.create);

//Assignment questions

//find by id
router.route('/movies/find/:id')
    .get(MoviesController.view)

//find all
router.route('/movies/findAll')
    .get(MoviesController.index)    

//delete
router.route('/movies/delete/:id')
    .delete(MoviesController.delete)   

//update
router.route('/movies/update/:id')
    .put(MoviesController.update);

router.route('/movies/:id')
    .get(MoviesController.findById)

module.exports = router;