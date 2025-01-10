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

test('validate with optional property (property absent)', () => {
  const schema = {
    type: 'object',
    properties: {
      name: { type: 'string' },
      age: { type: 'number' },
      address: { type: 'string', optional: true },
    },
  } as const;
  const data = { name: 'John', age: 30 };

  expect(validate(schema, data)).toBe(true);
});

test('validate with multiple types', () => {
  const schema = {
    value: { type: ['string', 'number'] },
  } as const;
  const validData1 = { value: 'Hello' };
  const validData2 = { value: 42 };
  const invalidData = { value: true };

  expect(validate(schema, validData1)).toBe(true);
  expect(validate(schema, validData2)).toBe(true);
  expect(validate(schema, invalidData)).toBe(false);
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

test('validate with heterogeneous array (tuple)', () => {
  const schema = {
    type: 'array',
    items: [{ type: 'string' }, { type: 'number' }],
  } as const;
  const validData = ['hello', 42];
  const invalidData = ['hello', 'world'];

  expect(validate(schema, validData)).toBe(true);
  expect(validate(schema, invalidData)).toBe(false);
});

test('validate with invalid schema input', () => {
  const schema: any = { name: 'string', age: 'number' };
  const data = { name: 'John', age: 'thirty' };

  expect(validate(schema, data)).toBe(false);
});

test('validate with additional properties not allowed', () => {
  const schema = {
    type: 'object',
    properties: {
      name: { type: 'string' },
      age: { type: 'number' },
    },
    additionalProperties: false,
  } as const;
  const validData = { name: 'John', age: 30 };
  const invalidData = { name: 'John', age: 30, extra: 'not allowed' };

  expect(validate(schema, validData)).toBe(true);
  expect(validate(schema, invalidData)).toBe(false);
});

test('validate with empty array', () => {
  const schema = ['string'] as unknown as Schema;
  const data: unknown[] = [];

  expect(validate(schema, data)).toBe(true);
});

test('validate with empty object', () => {
  const schema = { type: 'object', properties: {} } as const;
  const data = {};

  expect(validate(schema, data)).toBe(true);
});
