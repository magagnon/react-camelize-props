import camelizeObjectAttrs from './camelizeObjectAttrs';

describe('camelizeObjectAttrs', () => {
  it('receives an object and returns a new object with all keys in camelCase', () => {
    const obj = {
      user_data: {
        first_name: 'Joe',
        'last-name': 'Doe',
        profileId: 1,
        age: null,
      },
    };
    const result = {
      userData: {
        firstName: 'Joe',
        lastName: 'Doe',
        profileId: 1,
        age: null,
      },
    };

    expect(camelizeObjectAttrs(obj)).toEqual(result);
  });
});
