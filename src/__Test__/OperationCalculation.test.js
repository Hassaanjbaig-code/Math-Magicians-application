import calculate from '../components/logic/calculate';

const object = {
  total: null,
  next: null,
  operation: null,
};

test('Should be null in AC button', () => {
  const obj = { ...object, next: 5 };
  const buttonName = 'AC';
  const result = calculate(obj, buttonName);
  expect(result).toEqual(object);
});

test('Show a number', () => {
  const obj = { ...object };
  const buttonName = '5';
  const result = calculate(obj, buttonName);
  expect(result).toEqual({ total: null, next: '5' });
});

test('Add a number', () => {
  const obj = { next: 5, operation: '+', total: '5' };
  const buttonName = '=';
  const result = calculate(obj, buttonName);
  expect(result).toEqual({ ...object, total: '10' });
});

test('Multiple two number', () => {
  const obj = { next: 5, operation: '÷', total: '5' };
  const buttonName = '=';
  const result = calculate(obj, buttonName);
  expect(result).toEqual({ ...object, total: '1' });
});
