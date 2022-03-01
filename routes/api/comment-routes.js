const router = require('express').Router();

const {
  addComment,
  removeComment,
  addReply,
  removeReply
} = require('../../controllers/comment-controller');

//get all comments at /api/comments/:pizzaId
router
  .route('/:pizzaId')
  .post(addComment);

//get all comments for one pizza at /api/comments/:pizzaId/:commentId
router
  .route('/:pizzaId/:commentId')
  .put(addReply)
  .delete(removeComment);

  //route for removing a reply
  router
  .route('/:pizzaId/:commentId/:replyId')
  .delete(removeReply);


module.exports = router;