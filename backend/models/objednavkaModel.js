import mongoose from "mongoose";
const schema = mongoose.Schema;

const objednavkaSchema = new schema({
    user: {
        type: String,
        required: true
    },
    zbozi: {
        type: Array,
        required: true
    },
    cena: {
        type: Number,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true
    }
}, {timestamps: true});

export default mongoose.model("objednavka", objednavkaSchema);