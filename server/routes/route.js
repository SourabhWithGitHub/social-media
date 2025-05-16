import express from "express";
import userRouters from "./user.route.js";
import authRouters from "./auth.route.js";
import postRouters from "./post.route.js";


const router= express.Router();
const baseURL= "api/v1"


router.use(`/${baseURL}/users`, userRouters);
router.use(`/${baseURL}/auth`, authRouters);
router.use(`/${baseURL}/posts`, postRouters);



export default router;