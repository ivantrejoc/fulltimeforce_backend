import BlogPost from "../../models/BlogPost.js";

export const getAllBlogPosts = async() => {
    try {
        const blogPosts = await BlogPost.find().exec();
        return blogPosts;
    } catch (error) {
        console.error;
        return error;
    }
}

export const getBlogPostById = async(id) => {
    try {
        const blogPostById = await BlogPost.findById(id).exec();
        return blogPostById;
    } catch (error) {
        console.error;
        return error;
    }
}

