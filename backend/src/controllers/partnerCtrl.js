/*const Partner = require('../models/Partner');

exports.getAllPartners = async (req, res) => {
try {
const partners = await Partner.find().sort({ createdAt: -1 });
res.json(partners);
} catch (err) {
res.status(500).json({ error: err.message });
}
};

exports.createPartner = async (req, res) => {
try {
const newPartner = new Partner(req.body);
await newPartner.save();
res.status(201).json(newPartner);
} catch (err) {
res.status(400).json({ error: err.message });
}
};

exports.updatePartner = async (req, res) => {
try {
const updated = await Partner.findByIdAndUpdate(req.params.id, req.body, { new: true });
res.json(updated);
} catch (err) {
res.status(400).json({ error: err.message });
}
};

exports.toggleStatus = async (req, res) => {
try {
const partner = await Partner.findById(req.params.id);
partner.status = partner.status === 'active' ? 'inactive' : 'active';
await partner.save();
res.json(partner);
} catch (err) {
res.status(500).json({ error: err.message });
}
};*/

const Partner = require('../models/Partner');

/* ------------------------------------------------------------------ */
/*  GET /api/partners/all                                             */
/* ------------------------------------------------------------------ */
const getAllPartners = async (req, res) => {
  try {
    const partners = await Partner.find().sort({ createdAt: -1 });
    res.json(partners);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* ------------------------------------------------------------------ */
/*  POST /api/partners/create                                         */
/* ------------------------------------------------------------------ */
const createPartner = async (req, res) => {
  try {
    const newPartner = new Partner(req.body);
    await newPartner.save();
    res.status(201).json(newPartner);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

/* ------------------------------------------------------------------ */
/*  PUT /api/partners/:id                                             */
/* ------------------------------------------------------------------ */
const updatePartner = async (req, res) => {
  try {
    const updated = await Partner.findByIdAndUpdate(
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
/*  PATCH /api/partners/:id/status                                    */
/* ------------------------------------------------------------------ */
const toggleStatus = async (req, res) => {
  try {
    const partner = await Partner.findById(req.params.id);
    if (!partner) return res.status(404).json({ error: 'Partner not found' });

    partner.status = partner.status === 'active' ? 'inactive' : 'active';
    await partner.save();
    res.json(partner);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* ------------------------------------------------------------------ */
/*                                     */
/* ------------------------------------------------------------------ */
module.exports = {
  getAllPartners,
  createPartner,
  updatePartner,
  toggleStatus
};
