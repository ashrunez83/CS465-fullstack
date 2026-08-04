const mongoose = require('mongoose');
const Trip = require('../models/travlr'); //Register Model
const Model = mongoose.model('trips');

//GET: /trips - lists all trips
//Regardless of the outcome response must include HTML Status Code
//and JSON message to the requesting client

const tripsList = async(req, res) => {
    const q = await Model
        .find({})//No filter return all records
        .exec();

    console.log(q);

    if (!q) {
        return res
            .status(404)
            .json({message: 'No trips found' });
    } else {
        return res
            .status(200)
            .json(q);
    }
};


const tripsFindByCode = async (req, res) => {
    const q = await Model
        .find({'code' : req.params.tripCode }) //No filter, return all records
        .exec();
    
        //shows results of query on the console
    console.log(q);

    if(!q){
    //Database returned no data
        return res
                .status(404)
                .json(err);
    } else { //Return resulting trip list
        return res
                .status(200)
                .json(q);
    }

};

module.exports = {
    tripsList,
    tripsFindByCode
};