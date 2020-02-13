const Truck = require('../models/truck');

// @desc Gets Trucks
// @route GET api/
exports.getTrucks = async (req, res, next) => {
    try {
        const trucks = await Truck.find();
        return res.status(200).json({
            success: true,
            count: trucks.length,
            data: trucks
        });
    } catch(err) {
        console.error(err);
        res.status(500).json({error: 'Server Error'});
    }
}

// @desc Creates a Truck
// @route POST api/
exports.addTruck = async (req, res, next) => {
    try {
        const truck = await Truck.create(req.body);
        return res.status(200).json({
            success: true,
            data: truck
        });
    } catch(err) {
        // if(err.code === 11000) {
        //     console.log(err);
        //     return res.status(400).json({error: 'This truck already exists'});
        // }
        console.error(err);
        res.status(500).json({error: 'Server Error'});
    }
}