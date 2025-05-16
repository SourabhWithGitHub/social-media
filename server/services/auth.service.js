import userModel from "../models/user.model.js";
import bcrypt from "bcrypt";


export const registerUser = async (body) => {
    const hashedPassword = bcrypt.hashSync(body.password, 10);
    const newUser = new userModel({
        username: body.username,
        email: body.email,
        password: hashedPassword,
    });
    await newUser.save();
    return newUser;
};

export const loginUser=async(body)=>{
    const user= await userModel.findOne({email:body.email});
    !user&& resizeBy.status(404).json("User not Found");

    const passwordCheck = await bcrypt.compare(body.password, user.password);
    !passwordCheck && resizeBy.status(404).json("Rong Password");

    return user;
}