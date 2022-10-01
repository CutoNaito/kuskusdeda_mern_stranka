import objednavkaModel from "../models/objednavkaModel.js";
import mongoose from "mongoose";

const getObjednavky = async (req, res) => {
    const objednavky = await objednavkaModel.find({}).sort({createdAt: -1});
    res.status(200).json(objednavky);
}

const getObjednavka = async (req, res) => {
    const {id} = req.params;
    const objednavka = await objednavkaModel.findById(id);
    if (!objednavka) {
        res.status(404).json({message: "Objednavka not found"});
    } else {
        res.status(200).json(objednavka);
    }
}

const createObjednavka = async (req, res) => {
    const {kod, user} = req.body;
    try {
        const objednavka = await objednavkaModel.create({kod, user});
        res.status(201).json(objednavka);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

const updateObjednavka = async (req, res) => {
    const {id} = req.params;
    const {kod, user} = req.body;
    const objednavka = await objednavkaModel.findByIdAndUpdate(id, {kod, user}, {new: true});
    if (!objednavka) {
        res.status(404).json({message: "Objednavka not found"});
    } else {
        res.status(200).json(objednavka);
    }
}

const deleteObjednavka = async (req, res) => {
    const {id} = req.params;
    const objednavka = await objednavkaModel.findByIdAndDelete(id);
    if (!objednavka) {
        res.status(404).json({message: "Objednavka not found"});
    } else {
        res.status(200).json(objednavka);
    }
}

export default {getObjednavky, getObjednavka, createObjednavka, updateObjednavka, deleteObjednavka};