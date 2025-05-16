
import { loginUser, registerUser } from "../services/auth.service.js";
import { deleteUser } from "../services/user.service.js";

//register
export const register = async (req, res) => {
    try {
        const newUser = await registerUser(req.body);

        const{password, ...userData}=newUser._doc;
        res.status(200).json({
            userData,
            message: "User has been registered successfully"
        });
    } catch (error) {
        res.status(500).json({
            error: error,
            message: "Error Occure While Registring User"
        });
        console.log(error);
    }
};

//login
export const login = async (req, res)=>{
    try {
        const loggedInUser = await loginUser(req.body);
        const{password, ...userData}=loggedInUser._doc;
        res.status(200).json({
            message:"User Logged In Successfully",
            userData,
        });
    } catch (error) {
        res.status(500).json({
            error: error,
            message: "Error Occured While Logging User In"
        });
        console.log(error);
    }
};

//delete user
export const userDelete = async (req, res)=>{
    try {
        await deleteUser(req.params.id);
        res.status(200).json({
            message:"User Deleted Successfully",
            data,
        });
    } catch (error) {
        res.status(500).json({
            error: error,
            message: "Error Occured While Deleting User"
        });
        console.log(error);
    }
};