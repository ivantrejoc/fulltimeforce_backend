import BlogPost from "../../models/BlogPost.js";

const updateBlogPost = async (id, title, content, author) => {
  try {
    const newValues = { title, content, author };

    const updateBlogPost = await BlogPost.findByIdAndUpdate(id, newValues, {
      new: true
    }).exec();
    if (updateBlogPost) {
      return `Post ${id} updated successfully`;
    }
  } catch (error) {
    console.error;
    return { message: error.message };
  }
};

export default updateBlogPost;
