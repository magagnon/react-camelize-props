import camelizeObjectAttrs from './camelizeObjectAttrs';

describe('camelizeObjectAttrs', () => {
  it('receives an object and returns a new object with all keys in camelCase', () => {
    const obj = {
      user_data: {
        first_name: 'Joe',
        'last-name': 'Doe',
        profileId: 1,
        age: null,
        weight_measurements: [
          { recorded_at: '2018-01-29', value: 160 },
          { recorded_at: '2018-02-05', value: 158 },
        ],
      },
    };
    const result = {
      userData: {
        firstName: 'Joe',
        lastName: 'Doe',
        profileId: 1,
        age: null,
        weightMeasurements: [
          { recordedAt: '2018-01-29', value: 160 },
          { recordedAt: '2018-02-05', value: 158 },
        ],
      },
    };

    expect(camelizeObjectAttrs(obj)).toEqual(result);
  });
});
