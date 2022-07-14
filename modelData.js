let mongoose = require('mongoose');
const SchemeModel = {

    number: String,
    description: String,

    category: String,

    status: String,

};
const modelGlutenAdditive = mongoose.model("modelGlutenAdditive", SchemeModel, "modelData");
module.exports = { modelGlutenAdditive }