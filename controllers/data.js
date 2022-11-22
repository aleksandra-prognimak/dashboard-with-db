import City from '../models/City.js';

export const getData = async(req, res) => {
  try {
    const data = await City.find();

    if (!data) {
      return res.json({ message: 'No data' });
    }

    res.json({ data });
  } catch (error) {
    res.json({ message: 'Something went wrong...' });
  }
};
