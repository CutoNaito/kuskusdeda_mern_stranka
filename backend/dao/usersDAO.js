import usersModel from "../models/usersModel.js";
import mongoose from "mongoose";

const getUsers = async (req, res) => {
    const users = await usersModel.find({}).sort({createdAt: -1});
    res.status(200).json(users);
}

const getUser = async (req, res) => {
    const {id} = req.params;
    const user = await usersModel.findById(id);
    if (!user) {
        res.status(404).json({message: "User not found"});
    } else {
        res.status(200).json(user);
    }
}

const createUser = async (req, res) => {
    const {username, password, email, isAdmin} = req.body;
    try {
        const user = await usersModel.create({username, password, email, isAdmin});
        res.status(201).json(user);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

const updateUser = async (req, res) => {
    const {id} = req.params;
    const {username, password, email, isAdmin} = req.body;
    const user = await usersModel.findByIdAndUpdate(id, {username, password, email, isAdmin}, {new: true});
    if (!user) {
        res.status(404).json({message: "User not found"});
    } else {
        res.status(200).json(user);
    }
}

const deleteUser = async (req, res) => {
    const {id} = req.params;
    const user = await usersModel.findByIdAndDelete(id);
    if (!user) {
        res.status(404).json({message: "User not found"});
    } else {
        res.status(200).json(user);
    }
}

export default {getUsers, getUser, createUser, updateUser, deleteUser};