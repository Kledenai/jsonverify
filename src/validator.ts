import { Schema, Data } from './types';

export const validate = (schema: Schema, data: Data): boolean => {
  if (typeof schema === 'string') {
    return (
      (schema === 'null' && data === null) ||
      (schema === 'string' && typeof data === 'string') ||
      (schema === 'number' && typeof data === 'number') ||
      (schema === 'boolean' && typeof data === 'boolean')
    );
  }

  if (Array.isArray(schema)) {
    if (!Array.isArray(data)) {
      return false;
    }
    return data.every((item) => validate(schema[0], item));
  }

  if (typeof schema === 'object' && schema !== null) {
    for (const key in schema) {
      if (!(key in data) || !validate(schema[key], data[key])) {
        return false;
      }
    }
    return true;
  }

  return false;
};