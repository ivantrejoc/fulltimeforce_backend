import mongoose from "mongoose";

const BlogPostSchema = new mongoose.Schema(
  {
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
    }
  },
  { timestamps: true }
);

const BlogPost = mongoose.model("BlogPost", BlogPostSchema);
export default BlogPost;
