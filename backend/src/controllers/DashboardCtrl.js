/*const Partner = require('../models/Partner');
const Deal    = require('../models/Deal');
const Content = require('../models/Content');

const pipelineAgg = await Deal.aggregate([
  { $match: { status: 'open' } },
  { $group: { _id: null, total: { $sum: '$value' } } }
]);
const totalPipelineValue = pipelineAgg.length ? pipelineAgg[0].total : 0;

exports.getKpis = async (req,res)=>{
  try{
    const [total,active,inactive] = await Promise.all([
      Partner.countDocuments(),
      Partner.countDocuments({status:'active'}),
      Partner.countDocuments({status:'inactive'})
    ]);
    const pipeline = await Deal.aggregate([
      {$match:{status:'open'}},
      {$group:{_id:null,total:{$sum:'$value'}}}
    ]);
    const closedThisMonth = await Deal.countDocuments({
       status:'won',
       closedAt:{ $gte: new Date(new Date().getFullYear(), new Date().getMonth(),1)}
    });
    res.json({
      totalPartners: total,
      activePartners: active,
      inactivePartners: inactive,
      totalPipeline: pipeline[0]?.total || 0,
      dealsClosed: closedThisMonth
    });
  }catch(err){ res.status(500).json({error:err.message}); }
};
exports.getFunnel = async (req, res) => {
  try {
    const data = await Deal.aggregate([
      { $group: { _id: '$stage', count: { $sum: 1 }, value: { $sum: '$value' } } }
    ]);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getSalesTrend = async (req, res) => {
  try {
    const { start, end } = req.query;          // YYYY-MM-DD
    const trend = await Deal.aggregate([
      { $match: { status: 'won', closedAt: { $gte: new Date(start), $lte: new Date(end) } } },
      { $group: {
          _id: { $dateToString: { format: '%Y-%m', date: '$closedAt' } },
          total: { $sum: '$value' }
        }
      },
      { $sort: { _id: 1 } }
    ]);
    res.json(trend);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getPartnerPerformance = async (req, res) => {
  try {
    const perf = await Deal.aggregate([
      { $match: { status: 'won' } },
      { $group: { _id: '$partnerId', total: { $sum: '$value' } } },
      { $lookup: {
          from: 'partners',
          localField: '_id',
          foreignField: '_id',
          as: 'partner'
        }
      },
      { $unwind: '$partner' },
      { $project: { partner: '$partner.name', total: 1 } },
      { $sort: { total: -1 } },
      { $limit: 10 }
    ]);
    res.json(perf);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getWinLoss = async (req, res) => {
  try {
    const wl = await Deal.aggregate([
      { $match: { status: { $in: ['won', 'lost'] } } },
      { $group: { _id: '$status', count: { $sum: 1 } } }
    ]);
    res.json(wl);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getContentSummary = async (req, res) => {
  try {
    const summary = await Content.aggregate([
      { $group: { _id: '$category', count: { $sum: 1 } } }
    ]);
    res.json(summary);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getPartnerSummary = async (req, res) => {
  try {
    const rows = await Deal.aggregate([
      { $group: {
          _id: '$partnerId',
          activeDeals: { $sum: { $cond: [{ $eq: ['$status', 'open'] }, 1, 0] } },
          wonDeals:    { $sum: { $cond: [{ $eq: ['$status', 'won'] }, 1, 0] } }
        }
      },
      { $lookup: { from: 'partners', localField: '_id', foreignField: '_id', as: 'partner' } },
      { $unwind: '$partner' },
      { $project: {
          partnerName: '$partner.name',
          tier:        '$partner.tier',
          activeDeals: 1,
          wonDeals:    1
        }
      }
    ]);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
module.exports = {
getKpis,
getFunnel,
getSalesTrend,
getPartnerPerformance,
getWinLoss,
getContentSummary,
getPartnerSummary
};*/
/* repeat similar pattern for other handlers */
const Partner = require('../models/Partner');
const Deal    = require('../models/Deal');
const Content = require('../models/Content');

const getKpis = async (req, res) => {
  try {
    const [total, active, inactive] = await Promise.all([
      Partner.countDocuments(),
      Partner.countDocuments({ status: 'active' }),
      Partner.countDocuments({ status: 'inactive' })
    ]);

    const pipeline = await Deal.aggregate([
      { $match: { status: 'open' } },
      { $group: { _id: null, total: { $sum: '$value' } } }
    ]);
    const totalPipeline = pipeline.length ? pipeline[0].total : 0;

    const closedThisMonth = await Deal.countDocuments({
      status: 'won',
      closedAt: { $gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1) }
    });

    res.json({
      totalPartners: total,
      activePartners: active,
      inactivePartners: inactive,
      totalPipeline: totalPipeline,
      dealsClosed: closedThisMonth
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getFunnel = async (req, res) => {
  try {
    const data = await Deal.aggregate([
      { $group: { _id: '$stage', count: { $sum: 1 }, value: { $sum: '$value' } } }
    ]);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getSalesTrend = async (req, res) => {
  try {
    const { start, end } = req.query;
    const trend = await Deal.aggregate([
      { $match: { status: 'won', closedAt: { $gte: new Date(start), $lte: new Date(end) } } },
      {
        $group: {
          _id: { $dateToString: { format: '%Y-%m', date: '$closedAt' } },
          total: { $sum: '$value' }
        }
      },
      { $sort: { _id: 1 } }
    ]);
    res.json(trend);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getPartnerPerformance = async (req, res) => {
  try {
    const perf = await Deal.aggregate([
      { $match: { status: 'won' } },
      { $group: { _id: '$partnerId', total: { $sum: '$value' } } },
      {
        $lookup: {
          from: 'partners',
          localField: '_id',
          foreignField: '_id',
          as: 'partner'
        }
      },
      { $unwind: '$partner' },
      { $project: { partner: '$partner.name', total: 1 } },
      { $sort: { total: -1 } },
      { $limit: 10 }
    ]);
    res.json(perf);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getWinLoss = async (req, res) => {
  try {
    const wl = await Deal.aggregate([
      { $match: { status: { $in: ['won', 'lost'] } } },
      { $group: { _id: '$status', count: { $sum: 1 } } }
    ]);
    res.json(wl);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getContentSummary = async (req, res) => {
  try {
    const summary = await Content.aggregate([
      { $group: { _id: '$category', count: { $sum: 1 } } }
    ]);
    res.json(summary);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getPartnerSummary = async (req, res) => {
  try {
    const rows = await Deal.aggregate([
      {
        $group: {
          _id: '$partnerId',
          activeDeals: { $sum: { $cond: [{ $eq: ['$status', 'open'] }, 1, 0] } },
          wonDeals: { $sum: { $cond: [{ $eq: ['$status', 'won'] }, 1, 0] } }
        }
      },
      {
        $lookup: {
          from: 'partners',
          localField: '_id',
          foreignField: '_id',
          as: 'partner'
        }
      },
      { $unwind: '$partner' },
      {
        $project: {
          partnerName: '$partner.name',
          tier: '$partner.tier',
          activeDeals: 1,
          wonDeals: 1
        }
      }
    ]);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getKpis,
  getFunnel,
  getSalesTrend,
  getPartnerPerformance,
  getWinLoss,
  getContentSummary,
  getPartnerSummary
};

