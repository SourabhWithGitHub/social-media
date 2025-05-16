import mongoose from "mongoose";
import { Schema } from "mongoose";

const postSchema = new Schema({
    userId: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
    },
    img: {
        type: String,
    },
    likes: {
        type: [String],
        default: [],
    },
    comments: {
        type: String,
    },
}, {
    timestamps: true,
});

export default mongoose.model("Post", postSchema);
