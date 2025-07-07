const express = require('express');
const router = express.Router();
const PartnerCtrl = require('../controllers/partnerCtrl');

// Routes
router.get('/all', PartnerCtrl.getAllPartners); // fetch list of partners
router.post('/create', PartnerCtrl.createPartner); // add a new partner
router.put('/:id', PartnerCtrl.updatePartner); // edit partner
router.patch('/:id/status', PartnerCtrl.toggleStatus); // activate/deactivate

module.exports = router;