/**
 * Created by Dennis on 13/04/2017.
 */

var Special = require('../models/specials');
var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

// mongoose.connect('mongodb://admin:admin@ds137220.mlab.com:37220/chipper-menu');
//
// var db = mongoose.connection;
//
// db.on('error', function (err) {
//     console.log('connection error', err);
// });
// db.once('open', function () {
//     console.log('connected to database');
// });


function getByValue(arr, id) {

    var result  = arr.filter(function(o){return o.id == id;} );

    return result ? result[0] : null; // or undefined
}

router.findAll = function(req, res) {
    // Use the Special item model to find all menuitems
    Special.find(function(err, specials) {
        if (err)
            res.send(err);

        res.json(specials);
    });
}

router.findOne = function(req, res) {

    // Use the Special model to find a single special item
    Special.find({ "_id" : req.params.id },function(err, special) {
        if (err)
            res.json({ message: 'Special NOT Found!', errmsg : err } );
        else
            res.json(special);
    });
}


router.addSpecial = function(req, res) {

    var special = new Special();

    special.name = req.body.name;
    special.items = req.body.items;
    special.price = req.body.price;
    special.ad_hoc_price = req.body.ad_hoc_price;
    special.saving = req.body.saving;
    special.quantity = req.body.quantity;

    console.log('Adding special: ' + JSON.stringify(special));

    // Save the special and check for errors
    special.save(function(err) {
        if (err)
            res.send(err);

        res.json({ message: 'Special Added!', data: special });
    });
}

router.deleteSpecial = function(req, res) {

    Special.findByIdAndRemove(req.params.id, function(err) {
        if (err)
            res.send(err);
        else
            res.json({ message: 'Special Deleted!'});
    });
}

module.exports = router;