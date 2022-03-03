const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReplySchema = new Schema({
  //set custom id to avoid confusion with parent comment_id
  replyId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId()
  },
  replyBody: {
    type: String,
    required: 'Please type a reply!',
    trim: true
  },
  writtenBy: {
    type: String,
    required: 'Leave your name!',
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: createdAtVal => dateFormat(createdAtVal)
  }
},
{
  toJSON: {
    getters: true
  }
});


const CommentSchema = new Schema({
  writtenBy: {
    type: String,
    required: 'Leave your name!',
    trim: true
  },
  commentBody: {
    type: String,
    required: 'Type out a comment!',
    trim: true
  },
  createAt: {
    type: Date,
    default: Date.now,
    get: createdAtVal => dateFormat(createdAtVal)
  },
  replies: [ReplySchema]
},
{
  toJSON: {
    virtuals: true,
    getters: true
  },
  id: false
});

//get total count of comments and replies
CommentSchema.virtual('replyCount').get(function() {
  return this.replies.length;
});

const Comment = model('Comment', CommentSchema);

module.exports = Comment;