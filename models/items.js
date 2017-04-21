// var menuitems = [
//     {id: 1000000, category: 'Chips', name: 'Cheese Chips', qty: 1, price: 3.50},
//     {id: 1000003, category: 'Chips', name: 'Curry Chips', qty: 1, price: 3.50}
// ];
//
// module.exports = menuitems;

var mongoose = require('mongoose');

var ChipperSchema = new mongoose.Schema({
    category_name: String,
    name: String,
    qty: Number,
    price: Number
});
ChipperSchema.set('collection', 'regular-menu');

module.exports = mongoose.model('regular-menu', ChipperSchema);