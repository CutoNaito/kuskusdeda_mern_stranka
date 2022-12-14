import mongoose from "mongoose";
const schema = mongoose.Schema;

const userSchema = new schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: String,
        required: true,
    },
    token: {
        type: String,
        required: false,
    }
}, {timestamps: true});

export default mongoose.model("users", userSchema);