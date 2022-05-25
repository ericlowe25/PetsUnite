const router = require('express').Router();
const db = require('../models');

//Controllers routes for Events
//GET route events
router.get('/', (req, res) => {
    db.Event.find()
      .then(events => {
        res.render('events/index_events', {events});
      })
      .catch(err => {
        console.log('err', err);
        res.render('error404');
      })
})


//GET add events
router.get ('/new', (req, res) => {
    res.render('events/new_events')
})

//POST add events


//GET show events
router.get('/:id', (req, res) => {    
  db.Event.findById(req.params.id)
  .then(events => {
    res.render('events/show_events', {events});
  })
  .catch(err => {
    console.log('err', err);
    res.render('error404');
  })
})


//GET edit events
router.get('/:id/edit', (req, res) => {
    db.Event.findById(req.params.id)
      .then(events => {
        res.render('events/edit_events', {events})
      })
      .catch(err => {
        res.render('error404')
      })
})

//PUT edit events
router.put('/:id', (req, res) =>{
    db.Event.findByIdAndUpdate(req.params.id, req.body, {runValidators: true})
      .then(() => {
        res.redirect(`/events/${req.params.id}`);
      })
      .catch(err => {
        res.render('error404');
      })
})

//DELETE events

module.exports = router;