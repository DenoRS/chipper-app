/**
 * Created by Dennis on 13/04/2017.
 */

var mongoose = require('mongoose');

var SpecialSchema = new mongoose.Schema({

    special_name: String,
    items: [
        {
            qty: Number,
            name: String

            //price: Number
        },
        {
            qty: Number,
            name: String

            //price: Number
        }
    ],
    price: Number,
    ad_hoc_price: Number,
    saving: Number

});

SpecialSchema.set('collection', 'special-menu');

module.exports = mongoose.model('special-menu', SpecialSchema);