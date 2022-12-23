const express = require('express');
const router = express.Router();
const choices = require('./controller/choices');

router.route('/choices')
    .get(choices.get);

module.exports = router;