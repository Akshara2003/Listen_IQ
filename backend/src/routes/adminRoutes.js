const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/authMiddleware");
const authorizeRoles = require("../middlewares/roleMiddleware");

const {
  getAllPartners,
  deletePartner,
  updatePartnerStatus,
  addNewPartner, // ✅ ensure this is imported
} = require("../controllers/adminController");

// Secure all routes for admin only
router.use(protect, authorizeRoles("admin"));

router.get("/partners", getAllPartners);
router.delete("/partners/:id", deletePartner);
router.patch("/partners/:id/status", updatePartnerStatus);
router.post("/partners", addNewPartner); // ✅ now it will be defined

module.exports = router;
