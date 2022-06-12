const Ders = require('../models/ders');

const ders_get = (req, res) => {
  Ders.find()
    .sort({ createdAt: -1 })
    .then((response) => {
      res.render('index', { dersler: response });
    })
    .catch((err) => console.log(err));
};

const ders_put = (req, res) => {
  console.log(req.body);
  const ders = new Ders(req.body);

  // ders.save().then((response) => res.send(response));
  ders
    .save()
    .then((response) => {
      res.redirect('/dersler');
    })
    .catch((err) => console.log(err));
};

const ders_get_id = (req, res) => {
  const id = req.params.id;
  Ders.findById(id)
    .then((response) => {
      res.render('detay', { ders: response });
    })
    .catch((err) => console.log(err));
};

const ders_delete = (req, res) => {
  const id = req.params.id;
  Ders.findByIdAndDelete(id)
    .then((response) => {
      res.json({ redirect: '/dersler' });
    })
    .catch((err) => console.log(err));
};

module.exports = {
  ders_get,
  ders_put,
  ders_delete,
  ders_get_id,
};
