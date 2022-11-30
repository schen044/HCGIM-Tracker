// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Goal = require('./models/goal');
const Group = require('./models/group');

// Local variables will come in handy for holding retrieved documents
let user, goal, group;
let users, goals, groups;
