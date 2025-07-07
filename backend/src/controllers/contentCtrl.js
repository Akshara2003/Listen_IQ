/*const Content = require('../models/Content');

exports.getAllContent = async (req, res) => {
try {
const content = await Content.find().sort({ uploadDate: -1 });
res.json(content);
} catch (err) {
res.status(500).json({ error: err.message });
}
};

exports.uploadContent = async (req, res) => {
try {
const newContent = new Content(req.body);
await newContent.save();
res.status(201).json(newContent);
} catch (err) {
res.status(400).json({ error: err.message });
}
};

exports.editContent = async (req, res) => {
try {
const updated = await Content.findByIdAndUpdate(req.params.id, req.body, { new: true });
res.json(updated);
} catch (err) {
res.status(400).json({ error: err.message });
}
};

exports.deleteContent = async (req, res) => {
try {
await Content.findByIdAndDelete(req.params.id);
res.json({ message: 'Content deleted' });
} catch (err) {
res.status(500).json({ error: err.message });
}
};*/
// src/controllers/contentCtrl.js
const Content = require('../models/Content');

/* ------------------------------------------------------------------ */
/*  GET /api/content/all                                              */
/* ------------------------------------------------------------------ */
const getAllContent = async (req, res) => {
  try {
    const content = await Content.find().sort({ uploadDate: -1 });
    res.json(content);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* ------------------------------------------------------------------ */
/*  POST /api/content/upload                                          */
/* ------------------------------------------------------------------ */
const uploadContent = async (req, res) => {
  try {
    const newContent = new Content(req.body);
    await newContent.save();
    res.status(201).json(newContent);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

/* ------------------------------------------------------------------ */
/*  PUT /api/content/:id                                              */
/* ------------------------------------------------------------------ */
const editContent = async (req, res) => {
  try {
    const updated = await Content.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

/* ------------------------------------------------------------------ */
/*  DELETE /api/content/:id                                           */
/* ------------------------------------------------------------------ */
const deleteContent = async (req, res) => {
  try {
    await Content.findByIdAndDelete(req.params.id);
    res.json({ message: 'Content deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* ------------------------------------------------------------------ */
/*                                     */
/* ------------------------------------------------------------------ */
module.exports = {
  getAllContent,
  uploadContent,
  editContent,
  deleteContent
};
