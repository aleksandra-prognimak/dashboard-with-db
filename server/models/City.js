import mongoose from 'mongoose';

const CitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  schools: {
    type: Number,
    required: true,
  },
  kindergartens: {
    type: Number,
    required: true,
  },
  universities: {
    type: Number,
    required: true,
  },
});

export default mongoose.model('City', CitySchema);
