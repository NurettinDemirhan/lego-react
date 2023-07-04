const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  
  wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  basket: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  latestOrders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;