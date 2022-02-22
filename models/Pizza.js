const { Schema, model } = require('mongoose');

const PizzaSchema = new Schema({
  pizzaName: {
    type: String
  },
  createBy: {
    type: String
  },
  createAt: {
    type: Date,
    default: Date.now
  },
  size: {
    type: String,
    default: 'Large'
  },
  toppings: []
});


//create Pizza model using the Pizza schema
const Pizza = model('Pizza', PizzaSchema);

//export the pizza model
module.exports = Pizza;