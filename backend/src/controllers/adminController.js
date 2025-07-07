const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

// ✅ Get all partners
const getAllPartners = async (req, res) => {
  try {
    const partners = await User.find({ role: "user" });
    res.json(partners);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch partners" });
  }
};

// ✅ Delete partner
const deletePartner = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "Partner deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to delete partner" });
  }
};

// ✅ Update partner status
const updatePartnerStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const partner = await User.findByIdAndUpdate(req.params.id, { status }, { new: true });
    res.json(partner);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to update status" });
  }
};

// ✅ Add new partner
const addNewPartner = async (req, res) => {
  try {
    const { username, email, password, contactPerson, phone, tier, region } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Partner with this email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newPartner = await User.create({
      username,
      email,
      password: hashedPassword,
      contactPerson,
      phone,
      tier,
      region,
      role: "user",
    });

    res.status(201).json({ message: "Partner created successfully", partner: newPartner });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to create partner" });
  }
};

module.exports = {
  getAllPartners,
  deletePartner,
  updatePartnerStatus,
  addNewPartner,
};
