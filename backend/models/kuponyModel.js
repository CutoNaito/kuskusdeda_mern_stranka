import mongoose from "mongoose";
const schema = mongoose.Schema;

const kuponySchema = new schema({
    kod: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    }
}, {timestamps: true});

export default mongoose.model("kupony", kuponySchema);