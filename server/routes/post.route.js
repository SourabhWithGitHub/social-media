import express from "express";
import {
    createPostController,
    deletePostController,
    getAllPostController,
    getPostController,
    getTimelinePostController,
    LikeAndDislikeController,
    updatePostController
} from "../controllers/post.conroller.js";
import { parser } from "../config/cloudinary.js";

const router = express.Router();

// Create a post with file upload
router.post("/create-post", parser.single("img"), createPostController);
// Update a post
router.put("/update-post/:id", updatePostController);
// Delete a post
router.delete("/delete-post/:id", deletePostController);
// Like and dislike a post
router.put("/like-post/:id", LikeAndDislikeController);
// Get a single post
router.get("/get-post/:id", getPostController);
// Get all posts
router.get("/", getAllPostController);
// Get timeline posts
router.get("/get-timeline-posts/:username", getTimelinePostController);

export default router;
