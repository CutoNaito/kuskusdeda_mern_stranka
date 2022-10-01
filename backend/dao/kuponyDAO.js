import kuponyModel from "../models/kuponyModel.js";
import mongoose from "mongoose";

const getKupony = async (req, res) => {
    const kupony = await kuponyModel.find({}).sort({createdAt: -1});
    res.status(200).json(kupony);
}

const getKupon = async (req, res) => {
    const {id} = req.params;
    const kupon = await kuponyModel.findById(id);
    if (!kupon) {
        res.status(404).json({message: "Kupon not found"});
    } else {
        res.status(200).json(kupon);
    }
}

const createKupon = async (req, res) => {
    const {kod, user} = req.body;
    try {
        const kupon = await kuponyModel.create({kod, user});
        res.status(201).json(kupon);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

const updateKupon = async (req, res) => {
    const {id} = req.params;
    const {kod, user} = req.body;
    const kupon = await kuponyModel.findByIdAndUpdate(id, {kod, user}, {new: true});
    if (!kupon) {
        res.status(404).json({message: "Kupon not found"});
    } else {
        res.status(200).json(kupon);
    }
}

const deleteKupon = async (req, res) => {
    const {id} = req.params;
    const kupon = await kuponyModel.findByIdAndDelete(id);
    if (!kupon) {
        res.status(404).json({message: "Kupon not found"});
    } else {
        res.status(200).json(kupon);
    }
}

export default {getKupony, getKupon, createKupon, updateKupon, deleteKupon};