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
    console.log("HERE IS THE BODY", req.body)

    db.Item.create(req.body).then((item) => {
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

    //VOTE UP
    app.post('items/:id/vote-up', function (req, res) {
        if( !req.user ) {
            console.log('Sign in to vote!');
            res.status(400).send('User is not signed in')
        }else {
            db.Item.findById(req.params.id).then(function (err, item) {
                console.log("Upvoat uId:", req.user.id);
                res.status(200).send('Vote was send successfully!!')
            }).catch((err) => {
                console.log("Upvote error:", err.message);
                res.status(400).send(err.message)
            })
        }
    });

    // VOTE DOWN
    app.put('items/:id/vote-down', function (req, res) {
        db.Item.findById(req.params.id).exec(function (err, item) {

          item.downVote.push(req.params._id);
          item.voteScore = post.

        })
    });
};
