const express = require('express');
const router = express.Router();
const { modelGlutenAdditive } = require('../modules/modelData');

const ObjectId = require('mongoose').Types.ObjectId;
//Get All Items
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

// save single Itme
router.post('/api/data/add', (req, res) => {
    const glutenitem = new modelGlutenAdditive({
        number: req.body.number,
        description: req.body.description,
        category: req.body.category,
        status: req.body.status

    });
    glutenitem.save((err, data) => {
        if (!err) {
            // res.send(data);
            res.status(200).json({ code: 200, message: 'Item Added Successfully', addItem: data })
        } else {
            console.log(err);
        }
    });
});


// Update Item

router.put('/api/data/update/:id', (req, res) => {


    const Item1 = {
        number: req.body.number,
        description: req.body.description,
        category: req.body.description,
        status: req.body.description
    };
    Employee.findByIdAndUpdate(req.params.id, { $set: Item1 }, { new: true }, (err, data) => {
        if (!err) {
            res.status(200).json({ code: 200, message: 'Item Updated Successfully', updateItem: data })
        } else {
            console.log(err);
        }
    });
});
// Delete Item
router.delete('/api/data/:id', (req, res) => {

    Employee.findByIdAndRemove(req.params.id, (err, data) => {
        if (!err) {
            // res.send(data);
            res.status(200).json({ code: 200, message: 'Item deleted', deleteItem: data })
        } else {
            console.log(err);
        }
    });
});


module.exports = router