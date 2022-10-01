import mongoose from "mongoose";
const schema = mongoose.Schema;

const zboziSchema = new schema({
    nazev: {
        type: String,
    }
}, {timestamps: true});

export default mongoose.model("zbozi", zboziSchema);