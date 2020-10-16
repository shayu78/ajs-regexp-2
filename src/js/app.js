/* eslint-disable no-console */

export default class Validator {
  constructor(phone) {
    if (typeof phone !== 'string') throw new Error('Некорректный тип данных, требуется строка');
    this.phone = phone;
  }

  unifyPhoneNumber() {
    const data = this.phone.split(/[()-\s]/).join('').replace(/^8/, '+7');
    if (data.search(/^\+(8\d{11}|7\d{10})$/) !== -1) return data;
    throw new Error('Некорректный номер телефона');
  }
}

try {
  const phoneValidator = new Validator('86 000 000 000');
  const validatePhone = phoneValidator.unifyPhoneNumber();
  console.log(validatePhone);
  console.log(new Validator(true));
} catch (error) {
  console.error(error.message);
}
