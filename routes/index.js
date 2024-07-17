const router = require('express').Router();


const NoteRouter = require('./notes');

router.use('/notes', NoteRouter);

module.exports = router;