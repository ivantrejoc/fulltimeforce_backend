import BlogPost from "../../models/BlogPost.js";

const deleteBlogPost = async (id) => {
    try {
        const deletePost = await BlogPost.findByIdAndDelete(id).exec();
        if(deletePost){
            return `Post ${id} deleted`; 
        }
            
        } catch (error) {
        console.error;
        return (error.message);
    }
}

export default deleteBlogPost;