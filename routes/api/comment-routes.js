const router = require('express').Router();

const {
  addComment,
  removeComment
} = require('../../controllers/comment-controller');

//get all comments at /api/comments/:pizzaId
router
  .route('/:pizzaId')
  .post(addComment);

//get all comments for one pizza at /api/comments/:pizzaId/:commentId
router
  .route('/:pizzaId/:commentId')
  .delete(removeComment);


module.exports = router;