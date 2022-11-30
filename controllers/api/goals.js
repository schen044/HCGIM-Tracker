
   
const Goal = require('../../models/goal');

module.exports = {
  index,
  show
};

async function index(req, res) {
  const goals = await Goal.find({}).sort('name').exec();
  res.json(goals);
}

async function show(req, res) {
  const goal = await Goal.findById(req.params.id);
  res.json(goal);
}