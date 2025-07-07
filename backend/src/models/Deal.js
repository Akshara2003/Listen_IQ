const mongoose = require('mongoose');

const DealSchema = new mongoose.Schema({
  partnerId:{ type: mongoose.Schema.Types.ObjectId, ref:'Partner' },
  name:     { type:String, required:true },
  stage:    { type:String, enum:['lead','qualified','proposal','won','lost'] },
  value:    { type:Number, required:true },
  status:   { type:String, enum:['open','won','lost'], default:'open'},
  createdAt:{ type:Date, default:Date.now },
  closedAt: Date
});

DealSchema.index({ partnerId:1, stage:1 });
module.exports = mongoose.model('Deal', DealSchema);
