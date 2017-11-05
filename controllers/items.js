//var router = express.Router({mergeParams: true});

var db = require('../models')

module.exports = (app) => {

  // INDEX
  app.get('/items', (req, res) => {
    res.json({message: "Success"})

  });
  // SHOW
  app.get('/items/:id', (req, res) => {
    res.json({message: "Success"})
    const itemId = req.params.id;
    db.Item.findById(itemId).then((item) => {
      res.json(item);
    });
  });

  // CREATE
  app.post('/items/create', (req, res) => {
    req.body.UserId = req.params.id;

    db.Item.create(req.body).then((item) => {
      res.status(200);
      res.json({msg: 'successfully added', item});
    }).catch((err) => {
      if (err) {
        res.json(err);
      }
    })
  });

  // UPDATE
  app.put('/items/:id/edit', (req, res) => {
    const itemId = req.body.params;
    db.Item.update(itemId).then((item) => {
      res.json(200);
      res.json({msg: 'successfully updated', item});
    }).catch((err) => {
      if(err) {
        res.json(err)
      }
    });
  });


  // DESTROY
  app.delete('/items/:id', (req, res) => {
    const itemId = req.body.params;
    db.Item.destroy(itemId).then((item) => {
      res.status(200);
      res.json({msg: 'successfully deleted', item});
    }).catch((err) => {
      if (err) {
        res.json(err);
      }
    });
  });

};
