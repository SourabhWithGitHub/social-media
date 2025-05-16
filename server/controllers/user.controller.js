import { deleteUser, followUser, getUser, getUserFriends, getUserProfile, unfollowUser, updateProfilePicture, updateUser } from "../services/user.service.js";

//update User Controller
export const updateUserController = async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        try {
            const user = await updateUser(req.params.id, req.body);
            res.status(200).json({
                user,
                message: "Accunt has been updated successfully",

            });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    } else {
        res.status(500).json("You can only Update your accunt");
    }
};

//update Profile Picture Controller
export const updateProfilePictureController = async (req, res) => {
    try {
        const user = await updateProfilePicture(req.params.id, req.file?.path);
        res.status(200).json({
            user,
            message: "Profile Picture Updated",

        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};

//delete User Controller
export const deleteUserController = async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        try {
            await deleteUser(req.params.id);
            res.status(200).json({
                message: "Accunt has been deleted successfully",
            });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    } else {
        res.status(500).json("You can only delete your accunt");
    }
};

//get User Controller
export const getUserController = async (req, res) => {
    if (req.body.userId === req.params._id || req.body.isAdmin) {
        try {
            const user = await getUser(req.params.id);
            const { password, ...data } = user._doc;
            res.status(200).json({
                userInfo: data,
                message: "Accunt has been fetch successfully",
            });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    } else {
        res.status(500).json("You can only fetch your accunt");
    }
};

//get User Profile Controller
export const getUserProfileController = async (req, res) => {
    try {
        const user = await getUserProfile(req.query);
        const { password, ...data } = user._doc;
        res.status(200).json({
            userInfo: data,
            message: "Accunt has been fetch successfully",
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};

//follow User Controller
export const followUserController = async (req, res) => {
    try {
        const data = await followUser(req.body, req.params);
        res.status(200).json({
            data,
            message: "Follow User Successfully",
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};

// unfollow User Controller
export const unfollowUserController = async (req, res) => {
    try {
        const data = await unfollowUser(req.body, req.params);
        res.status(200).json({
            data,
            message: "UnFollow User Successfully",
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};

// get User Friends Controller
export const getUserFriendsController = async (req, res) => {
    try {
        const friends = await getUserFriends(req.params);
        res.status(200).json({
            friends,
            message: "Friends have fetched Successfully!",
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};
