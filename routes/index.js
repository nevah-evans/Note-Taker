const router = require('express').Router();

const NoteData = require('../db/db.json');

router.use('/db', notes);

module.exports = router;