var db = require('../models');

module.exports = (app) => {

  // SHOW
  app.get('/contest/:id', (req, res) => {
    const contestId = req.params.id;
    db.Contest.findById(contestId).then((contest) => {
      res.json(contest);
    });
  });

  // CREATE
  app.post('/contest/create', (req, res) => {
    //req.body.UserId = req.params.id;
    console.dir(req.body);
    db.Contest.create(req.body).then((contest) => {
      res.status(200);
      res.json({msg: 'successfully added', contest});
    }).catch((err) => {
      if (err) {
        res.json(err);
      }
    })
  });

  // UPDATE
  app.put('/contest/:id/edit', (req, res) => {
    const contestId = req.body.params;
    db.Contest.update(contestId).then((contest) => {
      res.json(200);
      res.json({msg: 'successfully updated', contest});
    }).catch((err) => {
      if(err) {
        res.json(err)
      }
    });
  });


  // DESTROY
  app.delete('/contest/:id', (req, res) => {
    const contestId = req.body.params;
    db.Contest.destroy(contestId).then((contest) => {
      res.status(200);
      res.json({msg: 'successfully deleted', contest});
    }).catch((err) => {
      if (err) {
        res.json(err);
      }
    });
  });

};
