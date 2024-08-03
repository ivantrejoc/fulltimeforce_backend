import mongoose from "mongoose";

const BlogPostSchema = new mongoose.schema({
  id: {
    type: Number,
    required: true,
    unique: true,
    default: true
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});
const BlogPost = mongoose.model("BlogPost", BlogPostSchema);
export default BlogPost;
