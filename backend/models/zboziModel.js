import mongoose from "mongoose";
const schema = mongoose.Schema;

const zboziSchema = new schema({
    nazev: {
        type: String,
        required: true
    },
    popis: {
        type: String,
        required: false
    },
    cena: {
        type: Number,
        required: false
    },
    obrazek: {
        type: String,
        required: false
    }
}, {timestamps: true});

export default mongoose.model("zbozi", zboziSchema);