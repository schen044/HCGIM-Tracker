const Goal = require('../../models/goal');

module.exports = {
  index,
  show,
  create,
  edit,
  delete: deleteGoal
};

async function index(req, res) {
  const goals = await Goal.find({}).sort('name').exec();
  res.json(goals);
}

async function show(req, res) {
  const goal = await Goal.findById(req.params.id);
  res.json(goal);
}

async function create(req, res) {
  try {
      const goal = await Goal.create(req.body)
      res.json(goal)
  } catch(err) {
      res.status(400).json(err)
  }
}

async function edit(req, res) {
  const goal = await Goal.findOneAndUpdate({_id:req.params.id}, req.body)
  res.json(goal);
}

async function deleteGoal(req, res) {
    const goal = await Goal.findOneAndDelete({_id: req.params.id})
      res.send(goal);
}