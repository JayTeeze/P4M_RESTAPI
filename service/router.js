const express = require('express');
const router = express.Router();
const choices = require('../controller/choices');
const picker = require('../controller/picker');

router.route('/choices/:id?')
    .get(choices.get)
    .post(choices.post)
    .put(choices.put)
    .delete(choices.del);

router.route('/picker')
    .get(picker.get);

module.exports = router;