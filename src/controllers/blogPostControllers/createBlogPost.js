import BlogPost from "../../models/BlogPost.js";

const createBlogPost = async (
    title, content, author
) =>{
    try {
        const newBlogPost = await new BlogPost({
            title,
            content,
            author
        }).save(); 
        return newBlogPost;
    } catch (error) {       
        console.error(error.message)
        return error;
    }
}

export default createBlogPost;