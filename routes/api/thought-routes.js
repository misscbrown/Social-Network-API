const router = require('express').Router();
const {
    createThought,
    addReaction,
    removeReaction,
    removeThought,
    getAllThoughts
} = require('../controllers/thought-controller');

router
    .route('/')
    .get(getAllThoughts)
    .post(createThought);

    router  
    .route('/:thoughtId')
    .post(addReaction)
    .delete(removeThought);
    router
    .route('/:thoughtId/:reactionId')
    .delete(removeReaction);
    

    module.exports = router;
    