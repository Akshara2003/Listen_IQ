// models/Content.js
const mongoose = require('mongoose');
const ContentSchema = new mongoose.Schema({
  title:       { type:String, required:true },
  category:    { type:String, enum:['brochure','poster','ppt','demo']},
  fileUrl:     { type:String, required:true },
  uploadedBy:  { type: mongoose.Schema.Types.ObjectId, ref:'AdminUser' },
  uploadDate:  { type:Date, default:Date.now },
  downloadCnt: { type:Number, default:0 }
});
//export default mongoose.model('Content', ContentSchema);
module.exports = mongoose.model('Content', ContentSchema);
