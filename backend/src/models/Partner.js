const mongoose = require('mongoose');

const PartnerSchema = new mongoose.Schema({
  name:  { type: String, required: true },
  tier:  { type: String, enum:['Bronze','Silver','Gold'], default:'Bronze'},
  status:{ type: String, enum:['active','inactive'], default:'active'},
  contactEmail:String,
  createdAt:{ type:Date, default:Date.now },
  lastLogin:Date
});

module.exports = mongoose.model('Partner', PartnerSchema);
