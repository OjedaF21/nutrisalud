const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    let users = [{name:'...', username:'...', password:'...'}];

    res.json(users);
})

module.exports = router;