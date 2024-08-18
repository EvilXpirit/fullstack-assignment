const mongoose = require('mongoose');
const Card = require('../models/cardModel');

exports.createCard = async (req, res) => {
    try {
        const { title, description } = req.body;
        const id = new mongoose.Types.ObjectId().toString();  
        
        const newCard = new Card({ id, title, description });
        await newCard.save();
        
        res.status(201).json(newCard);
    } catch (err) {
        res.status(500).json({ message: 'Failed to create card', error: err.message });
    }
};


exports.getAllCards = async (req, res) => {
    try {
        const cards = await Card.find();
        res.status(200).json(cards);
    } catch (err) {
        res.status(500).json({ message: 'Failed to retrieve cards', error: err.message });
    }
};


exports.getCardByTitle = async (req, res) => {
    try {
        const { title } = req.params;
        const card = await Card.findOne({ title });

        if (!card) {
            return res.status(404).json({ message: 'Card not found' });
        }

        res.status(200).json(card);
    } catch (err) {
        res.status(500).json({ message: 'Failed to retrieve card', error: err.message });
    }
};
