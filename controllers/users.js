var db = require('../models')
var jwt = require('jsonwebtoken');
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
          return res.status(200).send({ message: 'Created user' });
        }).catch((err) => {
          if (err) {
            res.json(err);
          }
        });
      });
    });
  });

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

  // LOGIN
  app.post('/login', (req, res) => {
    var userToFind = req.body.username;
    db.User.findOne({ where: {username: userToFind } }).then(function(user) {
      bcrypt.compare(req.body.password, user.password, function(err, isMatch) {
        if (isMatch) {
          var token = jwt.sign({ id: user.id }, "process.env.SECRET", { expiresIn: "60 days" });
          res.cookie('nToken', token, { maxAge: 900000, httpOnly: true });
          res.status(200).send({message: "Successfully logged in"});
          console.log("Logged in!")
        } else {
          return res.status(401).send({ message: 'Wrong username or password' });
        }
      })
    })
  })

  // LOGOUT
  app.get('/logout', function(req, res) {
    res.clearCookie('nToken');
    res.redirect('/');
  });
};
