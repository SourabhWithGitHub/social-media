import postModel from "../models/post.model.js";
import userModel from "../models/user.model.js";



export const createPost = async ({ userId, desc, img }) => {
    try {
        const newPost = new postModel({
            userId,
            desc,
            img,
        });
        await newPost.save();
        return newPost;
    } catch (error) {
        throw error;
    }
};



export const updatePost = async (params, body) => {
    try {
        const updatedPost = await postModel.findById(params.id);
        if (!updatedPost.userId === body.userId) {
            throw new Error("You can update only your Post");
        } else {
            await postModel.updateOne(
                { _id: params.id },
                { $set: body },
                { new: true }
            );
            return updatedPost;
        }
    } catch (error) {
        throw error;
    }
};



export const deletePost = async (params, body) => {
    try {
        const deletedPost = await postModel.findById(params.id);
        if (deletedPost.userId === body.userId) {
            await postModel.deleteOne();
            return deletedPost;
        } else {
            throw new Error("You can delete only your Post");
        }
    } catch (error) {
        throw error;
    }
};


export const LikeAndDislike = async (params, body) => {
    try {
        const post = await postModel.findById(params.id);
        if (!post.likes.includes(body.userId)) {
            await post.updateOne({ $push: { likes: body.userId } });
        } else {
            await post.updateOne({ $pull: { likes: body.userId } });
        }
        return post;
    } catch (error) {
        throw error;
    }
};


export const getPost = async (params) => {
    try {
        const post = await postModel.findById(params.id);
        return post;
    } catch (error) {
        throw error;
    }
};

export const getTimelinePosts = async (params) => {
    try {
        if (!params.username) {
            throw new Error("Username is required");
        }
        const currentUser = await userModel.findOne({ username: params.username });
        if (!currentUser) {
            throw new Error(`User with username ${params.username} not found`);
        }
        const userPosts = await postModel.find({ userId: currentUser._id });

        const friendPosts = currentUser.followings?.length ? await Promise.all(
            currentUser.followings.map((friendId) => postModel.find({ userId: friendId }))) : [];
        return userPosts.concat(...friendPosts);
    } catch (error) {
        console.error(`Error fetching timeline posts: ${error.message}`);
        throw error;
    }
};

export const getAllPosts = async (params) => {
    try {
        const post = await postModel.aggregate([{ $sample: { size: 40 } }]);
        return post;
    } catch (error) {
        throw error;
    }
};