const request = require('supertest');
const app = require('../lib/app');

const { zodiacs } = require('../lib/zodiac-data.js');

describe('zodiac routes', () => {
  it('/zodiac should only return id and name for each sign', async () => {
    const res = await request(app).get('/zodiac');
    const expected = zodiacs.map((zodiac) => {
      return { id: zodiac.id, name: zodiac.name };
    });
    expect(res.body).toEqual(expected);
  });

  it('/zodiac/:id should return zodiac detail', async () => {
    const res = await request(app).get('/zodiac/1');
    const sign = {
      id: '1',
      name: 'aquarius',
      dates: 'Jan 21 - Feb 19',
      symbol: 'Water Bearer',
    };
    expect(res.body).toEqual(sign);
  });
});

describe('horoscope routes', () => {
  it('/horoscopes/:sign should return the horoscope from the sign', async () => {
    const res = await request(app).get('/horoscopes/aquarius');
    const horoscope = {
      id: '1',
      sign: 'aquarius',
      horoscope: 'You will lose your pants today.',
    };
    expect(res.body).toEqual(horoscope);
  });
});
