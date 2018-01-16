const snakeToCamel = require('./snakeToCamel');

describe('snakeToCamel', () => {
  describe('when input has underline', () => {
    it('converts one_two to oneTwo', () => {
      expect(snakeToCamel('one_two')).toBe('oneTwo');
    });

    it('converts one_two_three to oneTwoThree', () => {
      expect(snakeToCamel('one_two_three')).toBe('oneTwoThree');
    });
  });

  describe('when input has dash', () => {
    it('converts one-two to oneTwo', () => {
      expect(snakeToCamel('one-two')).toBe('oneTwo');
    });
  });
});
