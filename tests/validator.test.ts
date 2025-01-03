import { Schema } from '../src/types';
import { validate } from '../src/validator';

test('validate basic schema', () => {
  const schema = { name: 'string', age: 'number' } as const;
  const data = { name: 'John', age: 30 };

  expect(validate(schema, data)).toBe(true);
});

test('validate with missing property', () => {
  const schema = { name: 'string', age: 'number' } as const;
  const data = { name: 'John' };

  expect(validate(schema, data)).toBe(false);
});

test('validate with nested schema', () => {
  const schema = {
    user: {
      name: 'string',
      age: 'number',
    },
  } as const;
  const data = {
    user: {
      name: 'John',
      age: 30,
    },
  };

  expect(validate(schema, data)).toBe(true);
});

test('validate with array schema', () => {
  const schema = ['string'] as unknown as Schema;
  const data = ['hello', 'world'];

  expect(validate(schema, data)).toBe(true);
});

test('validate with invalid array schema', () => {
  const schema = ['number'] as unknown as Schema;
  const data = [1, 'world'];

  expect(validate(schema, data)).toBe(false);
});

test('validate with invalid schema input', () => {
  const schema: any = { name: 'string', age: 'number' };
  const data = { name: 'John', age: 'thirty' };

  expect(validate(schema, data)).toBe(false);
});