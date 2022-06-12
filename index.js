const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const Ders = require('./models/ders');
const router = require('./Routers/derslerRouter');

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use('/dersler', router);

const DB =
  'mongodb+srv://hasangkz:11235@cluster0.1utqsyv.mongodb.net/?retryWrites=true&w=majority';

mongoose
  .connect(DB)
  .then((res) => {
    console.log('bağlantı kuruldu');
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });

//MONGODB-MONGOOSE KISMI

//!MONGODBYE VERİ EKLEME
// app.get('/mongoose-ekle', (req, res) => {
//   const ders = new Ders({
//     title: 'physics',
//     text: 'make 3d model for dalton atomic theory model',
//   });
//   ders.save().then((response) => res.send(response));
// });

//!MONGODBDEN VERİ ÇEKME
// app.get('/mongoose-getir', (req, res) => {
//   Ders.find().then((response) => {
//     res.send(response);
//   });
// });

//!MONGODBDEN VERİ ÇEKME id'ye göre

// app.get('/mongoose-getir/:id', (req, res) => {
//   const id = req.params.id;
//   Ders.findById(id).then((response) => {
//     res.send(response);
//   });
// });

app.get('/', (req, res) => {
  res.redirect('/dersler');
  // const dersler = [
  //   { title: 'Matematik', text: 'Türevi 100 soru çöz.' },
  //   { title: 'Fizik', text: 'Tek yarıkta kırınım deneyini araştır.' },
  // ];
  // res.render('index', { dersler }); //"dersler" verisini "index.ejs"ye göndermek için ,{dersler} yazdım
});

app.get('/notes', (req, res) => {
  res.render('notes');
});

app.get('/dersekle', (req, res) => {
  res.render('dersekle');
});

app.get('*', (req, res) => {
  // Bu alttaki yazılanlar "error.html" için yazıldı ama artık biz "error.ejs" döndüreceğimiz için değiştir!!!
  // let options = {
  //   root: path.join(__dirname),
  // };
  // let fileName = './htmls/error.html';
  // res.status(404).sendFile(fileName, options);
  res.status(404).render('error');
});
