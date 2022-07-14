const express = require('express');
const router = express.Router();
const { modelGlutenAdditive } = require('../modules/modelData');

const ObjectId = require('mongoose').Types.ObjectId;
router.get('/api/data', (req, res) => {
    modelGlutenAdditive.find({}, (err, data) => {
        if (!err) {
            res.send(data);
            console.log(data)
        } else {
            console.log(err);
        }
    });
});

module.exports = router