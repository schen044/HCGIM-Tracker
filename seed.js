require('dotenv').config();
require('./config/database');

const Goal = require('./models/goal');

// Pattern:  IIFE
(async function() {

  await Goal.deleteMany({});
  const goals = await Goal.create([
    {name: 'Ardy Cloak 2', goalType: 'goal', tier: 'easy', icon: 'https://oldschool.runescape.wiki/images/Ardougne_cloak_2.png?c0a17'},
    {name: 'Kourend House Teleport', goalType: 'goal', tier: 'easy', icon: 'https://oldschool.runescape.wiki/images/Teleport_to_House.png?2585e'},
    {name: 'Fighter Torso', goalType: 'goal', tier: 'medium', icon: 'https://oldschool.runescape.wiki/images/Prayer_potion%284%29.png?219da'},
    {name: 'Void Armor', goalType: 'goal', tier: 'medium', icon: 'https://oldschool.runescape.wiki/images/Void_knight_top.png?a7de8'},
    {name: 'Slayer Helm(i)', goalType: 'goal', tier: 'hard', icon: 'https://oldschool.runescape.wiki/images/Slayer_helmet.png?7fb98'},
    {name: 'Fire Cape', goalType: 'goal', tier: 'hard', icon: 'https://oldschool.runescape.wiki/images/Fire_cape.png?5abba'},
    {name: '83 Construction', goalType: 'goal', tier: 'elite', icon: 'https://oldschool.runescape.wiki/images/Construction_icon.png?f9bf7'},
    {name: '71 Crafting', goalType: 'clue', tier: 'medium', icon: 'https://oldschool.runescape.wiki/images/Crafting_icon.png?a1f71'},
    {name: '74 Hunting', goalType: 'clue', tier: 'medium', icon: 'https://oldschool.runescape.wiki/images/Hunter_icon.png?8762f'},
    {name: '60 Prayer', goalType: 'clue', tier: 'hard', icon: 'https://oldschool.runescape.wiki/images/Prayer_icon.png?ca0dc'},
    {name: 'Swan Song', goalType: 'clue', tier: 'hard', icon: 'https://oldschool.runescape.wiki/images/Quest_point_icon.png?dc356'},
    {name: '70 Magic', goalType: 'clue', tier: 'elite', icon: 'https://oldschool.runescape.wiki/images/Magic_icon.png?334cf'},
    {name: 'Dragon Slayer II', goalType: 'clue', tier: 'elite', icon: 'https://oldschool.runescape.wiki/images/Quest_point_icon.png?dc356'},
    {name: '75 Attack', goalType: 'clue', tier: 'master', icon: 'https://oldschool.runescape.wiki/images/Attack_icon.png?b4bce'},
    {name: 'Song of the Elves', goalType: 'clue', tier: 'master', icon: 'https://oldschool.runescape.wiki/images/Quest_point_icon.png?dc356'},
  ]);

  process.exit();

})();