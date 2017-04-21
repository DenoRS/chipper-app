var Item = require('../models/items');
var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

mongoose.connect('mongodb://admin:admin@ds137220.mlab.com:37220/chipper-menu');

var db = mongoose.connection;

db.on('error', function (err) {
    console.log('connection error', err);
});
db.once('open', function () {
    console.log('connected to database');
});


function getByValue(arr, id) {

    var result  = arr.filter(function(o){return o.id == id;} );

    return result ? result[0] : null; // or undefined
}


router.findAll = function(req, res) {
    // Use the Menu item model to find all menuitems
    Item.find(function(err, items) {
        if (err)
            res.send(err);

        res.json(items);
    });
}

router.findOne = function(req, res) {

    // Use the Item model to find a single item
    Item.find({ "_id" : req.params.id },function(err, item) {
        if (err)
            res.json({ message: 'Item NOT Found!', errmsg : err } );
        else
            res.json(item);
    });
}

router.addItem = function(req, res) {

    var item = new Item();

    item.category_name = req.body.category_name;
    item.name = req.body.name;
    item.qty = req.body.qty;
    item.price = req.body.price;

    console.log('Adding item: ' + JSON.stringify(item));

    // Save the item and check for errors
    item.save(function(err) {
        if (err)
            res.send(err);

        res.json({ message: 'Item Added!', data: item });
    });
}

router.deleteItem = function(req, res) {

    Item.findByIdAndRemove(req.params.id, function(err) {
        if (err)
            res.send(err);
        else
            res.json({ message: 'Item Deleted!'});
    });
}

module.exports = router;