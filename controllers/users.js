var db = require('../models')
var bcrypt = require('bcrypt')

module.exports = (app) => {

  // SHOW
  app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    db.User.findById(userId).then((user) => {
      res.json(user);
    });
  });

  // CREATE
  app.post('/users/create', (req, res) => {
    // hash the password
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(req.body.password, salt, (err, hash) => {
        console.log("hash " + hash);
          var newUser = {
            username: req.body.username,
            password: hash
          }
          db.User.create(newUser).then((user) => {
          res.status(200);
          res.json({msg: 'successfully added', user});
        }).catch((err) => {
          if (err) {
            res.json(err);
          }
        });
      });               
    });
  });
  
  app.post('/login', (req, res) => {
    var userToFind = req.body.username;
    db.User.findOne({ where: {username: userToFind } }).then(function(user) {
      bcrypt.compare(req.body.password, user.password, function(err, isMatch) {
        done(err, isMatch);
      })
    })
    
    console.log(userToFind);
    res.json(userToFind);
  })

  // UPDATE
  app.put('/users/:id/edit', (req, res) => {
    const userId = req.body.params;
    db.User.update(userId).then((user) => {
      res.json(200);
      res.json({msg: 'successfully updated', user});
    }).catch((err) => {
      if(err) {
        res.json(err)
      }
    });
  });


  // DESTROY
  app.delete('/users/:id', (req, res) => {
    const userId = req.body.params;
    db.User.destroy(userId).then((user) => {
      res.status(200);
      res.json({msg: 'successfully deleted', user});
    }).catch((err) => {
      if (err) {
        res.json(err);
      }
    });
  });

};
