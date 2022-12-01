const User = require('../../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

module.exports = {
    create,
    login,
    checkToken,
    getInfo,
}

async function create(req, res) {
    try {
        const user = await User.create(req.body)
        const token = createJWT(user)
        res.json(token)
    } catch(err) {
        res.status(400).json(err)
    }
}

async function login(req, res) {
    try {
        const user = await User.findOne({email: req.body.email})
        if (!user) throw new Error()
        const match = await bcrypt.compare(req.body.password, user.password)
        if (!match) throw new Error()
        const token = createJWT(user)
        res.json(token)
    } catch(err) {
        console.log(err)
        res.status(400).json(err)
    }
}

function checkToken(req, res) {
    console.log('req.user', req.user)
    res.json(req.exp)
}

async function getInfo(req, res) {
    const userData = await fetch(`https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws?player=${req.params.username}`, {headers: {
        'Content-Type': 'text/html'
      }})
    res.send(await userData.text());
}

/*-- Helper Functions --*/
function createJWT(user) {
    return jwt.sign(
        { user },
        process.env.SECRET,
        { expiresIn: '24h' }
    )
}