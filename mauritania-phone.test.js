const validator = require('validator');

describe('isMobilePhone for Mauritania', () => {
  const validPhones = [
    '+22222123456',
    '0022232123456',
    '042123456',
    '22252123456',
    '+22272123456',
    '22292123456',
  ];

  const invalidPhones = [
    '+22212345678', // Invalid: extra digit
    '0022212345', // Invalid: too short
    '+22262123456', // Invalid: 6 is not a valid first digit
    '22123456', // Invalid: missing first digit
    '+22382123456', // Invalid: 8 is not a valid first digit
    '+221123456', // Invalid: too short
    'notaphonenumber',
  ];

  test.each(validPhones)('should validate correct Mauritanian number: %s', phone => {
    expect(validator.isMobilePhone(phone, 'ar-MR')).toBe(true);
  });

  test.each(invalidPhones)('should not validate incorrect Mauritanian number: %s', phone => {
    expect(validator.isMobilePhone(phone, 'ar-MR')).toBe(false);
  });
});
