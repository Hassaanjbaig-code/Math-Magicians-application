import calculate from '../components/logic/calculate';

const Object = {
  total: null,
  next: null,
  operation: null,
};

test('When Ac is click it should be null', () => {
  const obj = { ...Object, next: 5 };
  const buttonname = 'AC';
  const result = calculate(obj, buttonname);
  expect(result).toEqual(Object);
});

test('When press key(5) you get 5 in next', () => {
  const obj = { ...Object };
  const buttonname = '5';
  const result = calculate(obj, buttonname);
  expect(result).toEqual({ next: '5', total: null });
});

test('Multiply two number should be 25', () => {
  const obj = { next: 5, operation: 'x', total: '5' };
  const buttonname = '=';
  const result = calculate(obj, buttonname);
  expect(result).toEqual({ ...Object, total: '25' });
});

test('Divide the two number', () => {
  const obj = { next: 5, operation: '÷', total: '5' };
  const buttonname = '=';
  const result = calculate(obj, buttonname);
  expect(result).toEqual({ ...Object, total: '1' });
});
