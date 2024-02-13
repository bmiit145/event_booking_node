// create a user model and seed with default user

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { find } = require('../models/Event');
const app = require('express');

const userSchema = new mongoose.Schema({
    id:{type: String , required: true , unique:true},
    first_name: { type: String, required: true , unique:true},
    last_name: { type: String, required: true },
    email: { type: String, required: true , unique: true},
    password: { type: String, required: true },
});
const User = mongoose.model('User', userSchema);

module.exports =  User ;