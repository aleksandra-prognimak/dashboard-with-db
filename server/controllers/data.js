import City from '../models/City.js';

/*
export const data = async (req, res) => {
  try {
    const { name, schools, kindergartens, universities } = req.body;

    const isCity = await City.findOne({ name });

    if (isCity) {
      return res.json({ message: 'Город уже есть' });
    }

    const newCity = new City({
      name,
      schools,
      kindergartens,
      universities,
    });

    await newCity.save();

    res.json({
      newCity,
      message: 'Город добавлен',
    });
  } catch (error) {
    res.json({ message: 'что-то пошло не так' });
  }
}; */

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
