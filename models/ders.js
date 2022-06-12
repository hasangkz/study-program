const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dersSchema = new Schema(
  {
    title: { type: String, required: true },
    text: { type: String, required: true },
  },
  { timestamps: true }
);

const Ders = mongoose.model('Ders', dersSchema);

module.exports = Ders;
