
import { createPost, updatePost, deletePost, LikeAndDislike, getPost, getTimelinePosts, getAllPosts } from "../services/post.service.js";


export const createPostController = async (req, res) => {
    try {
        const { userId, desc } = req.body;
        const img = req.file ? req.file.path : undefined;

        if (!userId) {
            return res.status(400).json({
                message: "User ID is required.",
            });
        }

        const newPost = await createPost({ userId, desc, img });
        res.status(201).json({
            newPost,
            message: "Post created successfully.",
        });
    } catch (err) {
        console.error("Error creating post:", err);
        res.status(500).json({
            message: "Post creation failed.",
            error: err.message || err,
        });
    }
};



export const updatePostController = async (req, res) => {
    try {
        const updatedPost = await updatePost(req.params, req.body);
        res.status(200).json({
            updatedPost,
            message: "Post has been updated",
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Post update failed",
            err,
        });
    }
};



export const deletePostController = async (req, res) => {
    try {
        const deletedPost = await deletePost(req.params, req.body);
        res.status(200).json({
            deletedPost,
            message: "Post deleted",
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Post deletion failed",
            err,
        });
    }
};



export const LikeAndDislikeController = async (req, res) => {
    try {
        const post = await LikeAndDislike(req.params, req.body);
        res.status(200).json({
            post,
            message: "Post like or dislike action successful",
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Post like or dislike action failed",
            err,
        });
    }
};



export const getPostController = async (req, res) => {
    try {
        const post = await getPost(req.params);
        res.status(200).json({
            post,
            message: "post has been fetched successfully",
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Post fetch failed",
            err,
        });
    }
};



export const getTimelinePostController = async (req, res) => {
    try {
        const posts = await getTimelinePosts(req.params);
        res.status(200).json({
            posts,
            message: "Timeline fetched successfully",
        });
    } catch (err) {
        console.error("Error in getTimelinePostController:", err.message);
        res.status(500).json({
            message: "Timeline fetch failed",
            error: err.message,
        });
    }
};



export const getAllPostController = async (req, res) => {
    try {
        const posts = await getAllPosts();
        res.status(200).json({
            posts,
            message: "All posts have been fetched successfully",
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "All Posts fetch failed",
            err,
        });
    }
};