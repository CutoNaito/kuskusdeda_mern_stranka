import zboziModel from "../models/zboziModel.js";
import mongoose from "mongoose";

const getZbozi = async (req, res) => {
    const zbozi = await zboziModel.find({}).sort({createdAt: -1});
    res.status(200).json(zbozi);
}

const getZboziById = async (req, res) => {
    const {id} = req.params;
    const zbozi = await zboziModel.findById(id);
    if (!zbozi) {
        res.status(404).json({message: "Zbozi not found"});
    } else {
        res.status(200).json(zbozi);
    }
}

const createZbozi = async (req, res) => {
    const {nazev, popis, cena, obrazek} = req.body;
    if(req.header('Authorization') !== process.env.ADMIN_TOKEN) {
        return res.status(401).json({message: "Unauthorized"});
    }
    try {
        const zbozi = await zboziModel.create({nazev, popis, cena, obrazek});
        res.status(201).json(zbozi);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

const updateZbozi = async (req, res) => {
    const {id} = req.params;
    const {nazev, popis, cena, obrazek} = req.body;
    if(req.header('Authorization') !== process.env.ADMIN_TOKEN) {
        return res.status(401).json({message: "Unauthorized"});
    }
    const zbozi = await zboziModel.findByIdAndUpdate(id, {nazev, popis, cena, obrazek}, {new: true});
    if (!zbozi) {
        res.status(404).json({message: "Zbozi not found"});
    } else {
        res.status(200).json(zbozi);
    }
}

const deleteZbozi = async (req, res) => {
    const {id} = req.params;
    if(req.header('Authorization') !== process.env.ADMIN_TOKEN) {
        return res.status(401).json({message: "Unauthorized"});
    }
    const zbozi = await zboziModel.findByIdAndDelete(id);
    if (!zbozi) {
        res.status(404).json({message: "Zbozi not found"});
    } else {
        res.status(200).json(zbozi);
    }
}

export default {getZbozi, getZboziById, createZbozi, updateZbozi, deleteZbozi};